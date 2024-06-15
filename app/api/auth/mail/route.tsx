import { NextResponse } from "next/server";
import { Resend } from "resend";
import { KoalaWelcomeEmail } from "@/emails";

// To handle a POST request to /api/auth/mail
export async function POST(request: any) {
  const { email } = await request.json(); // Correctly parse the JSON body
  const resend = new Resend("re_Nmh65UNM_DAYSiDpepaKgVbz7dvpPRA6q");

  const { data, error } = await resend.emails.send({
    from: "Panel Szbludnik <kontakt@kontakt.szbludnik.pl>",
    to: email, // Use the parsed email address
    subject: "Witaj w Panelu kierowców",
    react: <KoalaWelcomeEmail />,
  });

  if (error) {
    return console.error({ error });
  }
  // Do whatever you want
  return NextResponse.json({ data });
}
