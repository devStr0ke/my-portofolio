import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = 'samuel.coelho@voidsoftware.pro';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    const { data, error } = await resend.emails.send({
      from: 'contact@voidsoftware.pro',
      to: [RECIPIENT_EMAIL],
      subject: `Nouveau message: ${subject}`,
      react: EmailTemplate({ 
        name, 
        email, 
        subject, 
        message 
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}