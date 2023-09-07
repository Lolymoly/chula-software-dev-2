import { NextResponse } from "next/server";
import { Resend } from "resend";

import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const { firstName, email } = await request.json();

	try {
		console.log("#", firstName, email);
		console.log(process.env.MAIL_FROM);
		const data = await resend.sendEmail({
			from: "Acme <onboarding@resend.dev>",
			to: email,
			subject: `hello ${firstName}`,
			react: WelcomeEmail({
				firstName,
			}),
		});
		return NextResponse.json(data);
	} catch (err: unknown) {
		return NextResponse.json({ err });
	}
}
