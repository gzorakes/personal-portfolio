"use server";

import { formSchema } from "@/components/web/contact-form";
import z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["gzorakes@gmail.com"],
      subject: `New message from ${emailFormData.name}`,
      replyTo: emailFormData.email,
      html: `
        <div>
          <p><strong>Name:</strong> ${emailFormData.name}</p>
          <p><strong>Email:</strong> ${emailFormData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${emailFormData.message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { ok: false, error: "Failed to send email." };
    }

    return { ok: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { ok: false, error: "Something went wrong." };
  }
};
