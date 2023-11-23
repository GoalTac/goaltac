import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/emails/example';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'myphungquoc@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
