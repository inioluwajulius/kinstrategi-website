import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

async function testEmail() {
  console.log("Attempting to send a test email via Resend...");
  try {
    const data = await resend.emails.send({
      from: 'KinStrategi Reception <onboarding@resend.dev>',
      to: ['shewa@kinstrategi.com'],
      subject: 'Test Email from KinStrategi Backend',
      html: '<p>If you receive this, the Resend API is working perfectly!</p>'
    });
    console.log("SUCCESS! The email was sent. Resend Response:", data);
  } catch (error) {
    console.error("ERROR! Failed to send email.", error);
  }
}

testEmail();
