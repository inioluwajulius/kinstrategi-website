import { Resend } from 'resend';

const resend = new Resend('re_5urvCVDJ_9usBCa1wrtpoBYEEPP5gb2hj');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { first_name, last_name, company, role, email, phone, message } = req.body;

    const data = await resend.emails.send({
      // Resend allows 'onboarding@resend.dev' for testing. 
      // Replace with 'reception@kinstrategi.com' once domain is verified on Resend.
      from: 'KinStrategi Reception <onboarding@resend.dev>',
      to: ['shewa@kinstrategi.com'],
      subject: `New Reception Signal from ${first_name} ${last_name} (${company})`,
      html: `
        <h2>New Signal Received!</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend API Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
