import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs//browser";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { user_name: name, user_email: email, message },
      process.env.EMAILJS_PUBLIC_KEY!
    );
    return NextResponse.json({ success: true });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Error desconocido" }, { status: 500 });
  }
}
