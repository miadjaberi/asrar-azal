import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://miadjaberi.github.io",
  "Access-Control-Allow-Headers": "authorization, apikey, x-client-info, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
  });

const normalizePhone = (value: unknown) =>
  String(value ?? "")
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .replace(/[\s()+-]/g, "");

const hex = (bytes: Uint8Array) =>
  [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");

const randomHex = (length: number) => {
  const bytes = new Uint8Array(Math.ceil(length / 2));
  crypto.getRandomValues(bytes);
  return hex(bytes).slice(0, length).toUpperCase();
};

const digest = async (value: string) =>
  hex(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))));

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "روش درخواست پشتیبانی نمی‌شود." }, 405);

  const origin = req.headers.get("origin");
  if (origin && origin !== "https://miadjaberi.github.io") {
    return json({ error: "مبدأ درخواست مجاز نیست." }, 403);
  }

  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) {
    return json({ error: "تنظیمات امن سرور کامل نیست." }, 503);
  }
  if (!req.headers.get("apikey")) {
    return json({ error: "کلید عمومی پروژه ارسال نشده است." }, 401);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > 12000) return json({ error: "حجم درخواست بیش از حد مجاز است." }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ error: "اطلاعات ارسالی معتبر نیست." }, 400);
  }

  const db = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  const salt = Deno.env.get("ORDER_RATE_LIMIT_SALT") || serviceKey;
  const rateKey = await digest(salt + ":" + ip + ":" + String(body.action || ""));
  const limit = body.action === "start" ? 6 : 20;
  const { data: allowed, error: rateError } = await db.rpc("consume_store_order_rate_limit", {
    p_key_hash: rateKey,
    p_limit: limit,
    p_window_seconds: 3600,
  });
  if (rateError) {
    console.error("Rate limit check failed", rateError.message);
    return json({ error: "سرویس سفارش موقتاً در دسترس نیست." }, 503);
  }
  if (!allowed) return json({ error: "تعداد درخواست‌ها زیاد است؛ کمی بعد دوباره تلاش کنید." }, 429);

  if (body.action === "start") {
    const productId = String(body.productId || "");
    const quantity = Number(body.quantity);
    const buyerName = String(body.buyerName || "").trim();
    const buyerPhone = normalizePhone(body.buyerPhone);
    const address = String(body.address || "").trim();
    if (!/^[0-9a-f-]{36}$/i.test(productId)) return json({ error: "کالای انتخاب‌شده معتبر نیست." }, 400);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return json({ error: "تعداد کالا معتبر نیست." }, 400);
    if (buyerName.length < 2 || buyerName.length > 120) return json({ error: "نام خریدار را درست وارد کنید." }, 400);
    if (buyerPhone.length < 7 || buyerPhone.length > 24 || !/^\d+$/.test(buyerPhone)) return json({ error: "شماره تماس معتبر نیست." }, 400);
    if (address.length > 500) return json({ error: "نشانی بیش از حد طولانی است." }, 400);

    const { data: product, error: productError } = await db
      .from("store_products")
      .select("id,name,price_toman,is_active")
      .eq("id", productId)
      .eq("is_active", true)
      .maybeSingle();
    if (productError || !product) return json({ error: "این کالا در حال حاضر موجود نیست." }, 404);

    const price = BigInt(String(product.price_toman));
    if (price <= 0n) return json({ error: "قیمت این کالا هنوز در پنل مدیریت تنظیم نشده است." }, 409);
    const total = price * BigInt(quantity);
    if (total > BigInt(Number.MAX_SAFE_INTEGER)) return json({ error: "مبلغ سفارش بیش از حد مجاز است." }, 400);

    const { data: settings, error: settingsError } = await db
      .from("store_settings")
      .select("contact_phone,contact_hours,payment_card_number,payment_card_holder,payment_bank_name")
      .eq("id", true)
      .single();
    if (settingsError || !settings?.payment_card_number) {
      return json({ error: "اطلاعات پرداخت هنوز توسط مدیریت تکمیل نشده است." }, 409);
    }

    const id = crypto.randomUUID();
    const orderCode = "AZ-" + randomHex(10);
    const receiptPath = id + "/pending";
    const { error: insertError } = await db.from("store_orders").insert({
      id,
      order_code: orderCode,
      product_id: product.id,
      product_name: product.name,
      product_price_toman: price.toString(),
      quantity,
      buyer_name: buyerName,
      buyer_phone: buyerPhone,
      delivery_address: address,
      total_toman: total.toString(),
      receipt_path: receiptPath,
      status: "awaiting_receipt",
    });
    if (insertError) {
      console.error("Order insert failed", insertError.message);
      return json({ error: "ثبت اولیه سفارش انجام نشد." }, 500);
    }

    return json({
      orderId: id,
      orderCode,
      totalToman: total.toString(),
      payment: {
        cardNumber: settings.payment_card_number,
        cardHolder: settings.payment_card_holder,
        bankName: settings.payment_bank_name,
      },
      contact: {
        phone: settings.contact_phone,
        hours: settings.contact_hours || "۱۸ الی ۲۱",
      },
    });
  }

  if (body.action === "prepare-receipt") {
    const orderCode = String(body.orderCode || "").trim().toUpperCase();
    const phone = normalizePhone(body.buyerPhone);
    const mime = String(body.receiptMime || "").toLowerCase();
    const extensions: Record<string, string> = {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
    };
    if (!/^AZ-[0-9A-F]{10}$/.test(orderCode) || phone.length < 7 || !extensions[mime]) {
      return json({ error: "کد پیگیری، شماره تماس یا نوع تصویر معتبر نیست." }, 400);
    }
    const { data: order, error } = await db.from("store_orders")
      .select("id,status")
      .eq("order_code", orderCode)
      .eq("buyer_phone", phone)
      .maybeSingle();
    if (error || !order) return json({ error: "سفارش پیدا نشد." }, 404);
    if (order.status !== "awaiting_receipt") return json({ error: "این سفارش در انتظار فیش نیست." }, 409);

    const receiptPath = order.id + "/receipt-" + randomHex(8) + "." + extensions[mime];
    const { data: upload, error: uploadError } = await db.storage
      .from("asrar-payment-receipts")
      .createSignedUploadUrl(receiptPath);
    if (uploadError || !upload) return json({ error: "آماده‌سازی بارگذاری فیش انجام نشد." }, 503);

    const { error: pathError } = await db.from("store_orders")
      .update({ receipt_path: receiptPath, updated_at: new Date().toISOString() })
      .eq("id", order.id)
      .eq("status", "awaiting_receipt");
    if (pathError) return json({ error: "ذخیره مسیر امن فیش انجام نشد." }, 500);
    return json({ upload: { path: receiptPath, token: upload.token } });
  }

  if (body.action === "finalize") {
    const orderCode = String(body.orderCode || "").trim().toUpperCase();
    const phone = normalizePhone(body.buyerPhone);
    if (!/^AZ-[0-9A-F]{10}$/.test(orderCode) || phone.length < 7) {
      return json({ error: "کد پیگیری یا شماره تماس معتبر نیست." }, 400);
    }

    const { data: order, error } = await db.from("store_orders")
      .select("id,receipt_path,status")
      .eq("order_code", orderCode)
      .eq("buyer_phone", phone)
      .maybeSingle();
    if (error || !order) return json({ error: "سفارش پیدا نشد." }, 404);
    if (order.status !== "awaiting_receipt") return json({ error: "این سفارش قبلاً ثبت نهایی شده است." }, 409);

    const parts = String(order.receipt_path).split("/");
    const fileName = parts.pop()!;
    const folder = parts.join("/");
    const { data: files, error: listError } = await db.storage
      .from("asrar-payment-receipts")
      .list(folder, { search: fileName, limit: 10 });
    if (listError) return json({ error: "بررسی فایل فیش انجام نشد." }, 503);
    const receipt = (files || []).find((f) => f.name === fileName);
    const metadata = receipt?.metadata || {};
    const size = Number(metadata.size || 0);
    const mime = String(metadata.mimetype || metadata.contentType || "");
    if (!receipt || size < 1 || size > 5 * 1024 * 1024 ||
        !["image/jpeg", "image/png", "image/webp"].includes(mime)) {
      return json({ error: "تصویر فیش معتبر بارگذاری نشده است." }, 400);
    }

    const { error: updateError } = await db.from("store_orders")
      .update({ status: "pending_review", updated_at: new Date().toISOString() })
      .eq("id", order.id)
      .eq("status", "awaiting_receipt");
    if (updateError) return json({ error: "ثبت نهایی سفارش انجام نشد." }, 500);
    return json({ success: true, orderCode, status: "pending_review" });
  }

  if (body.action === "status") {
    const orderCode = String(body.orderCode || "").trim().toUpperCase();
    const phone = normalizePhone(body.buyerPhone);
    if (!/^AZ-[0-9A-F]{10}$/.test(orderCode) || phone.length < 7) {
      return json({ error: "کد پیگیری یا شماره تماس معتبر نیست." }, 400);
    }
    const { data: order, error } = await db.from("store_orders")
      .select("order_code,product_name,quantity,total_toman,status,created_at")
      .eq("order_code", orderCode)
      .eq("buyer_phone", phone)
      .maybeSingle();
    if (error || !order) return json({ error: "سفارش پیدا نشد." }, 404);
    return json({ order });
  }

  return json({ error: "عملیات درخواست‌شده شناخته نشد." }, 400);
});
