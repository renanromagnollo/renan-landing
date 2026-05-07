// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { buildEnvironment } from "@/src/config";
import { contactSchema } from "@/src/schemas/contact";
import { rateLimit } from "@/src/utils";
import { SupabaseAdminClientFactory } from "../supabase";

export async function POST(req: NextRequest) {
  const env = buildEnvironment();

  try {
    // 🔥 1. Pegar IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    // 🔥 2. Aplicar rate limit
    const allowed = rateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validação
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      console.log(parsed.error.flatten());

      return NextResponse.json(
        {
          error: "Invalid data",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Anti-spam simples
    if (data.message.includes("http")) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    const supabase = SupabaseAdminClientFactory.create(env);

    const { error } = await supabase.from("contacts").insert([
      {
        name: data.name,
        email: data.email,
        company: data.company ?? null,
        type: data.type,
        message: data.message,
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 }
    );
  }
}