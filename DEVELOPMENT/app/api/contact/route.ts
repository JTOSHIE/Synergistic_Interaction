// Contact form API — Resend integration ready (uncomment after adding RESEND_API_KEY)
// V7 §11.3: Captures: name, org, role, email, phone, categories, message, referral
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  categories: string[];
  message: string;
  referral?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitise(str: string): string {
  return str.replace(/[<>'"]/g, '').trim().slice(0, 500);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    // Server-side validation
    if (!body.name?.trim()) return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    if (!body.organisation?.trim()) return NextResponse.json({ error: 'Organisation is required' }, { status: 400 });
    if (!body.role?.trim()) return NextResponse.json({ error: 'Role is required' }, { status: 400 });
    if (!body.email?.trim() || !isValidEmail(body.email)) return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    if (!body.message?.trim()) return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    if (!body.categories?.length) return NextResponse.json({ error: 'At least one product category is required' }, { status: 400 });

    const emailBody = `
NEW CATEGORY ASSESSMENT REQUEST
================================
Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })} AEST

Name:         ${sanitise(body.name)}
Organisation: ${sanitise(body.organisation)}
Role:         ${sanitise(body.role)}
Email:        ${sanitise(body.email)}
Phone:        ${body.phone ? sanitise(body.phone) : 'Not provided'}
Categories:   ${body.categories.map(sanitise).join(', ')}
Referral:     ${body.referral ? sanitise(body.referral) : 'Not specified'}

Message:
${sanitise(body.message)}

================================
Reply to: ${sanitise(body.email)}
    `.trim();

    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL ?? 'jt@synergisticinteraction.com.au';

    // OPTION A: Resend (recommended — uncomment after adding RESEND_API_KEY to env vars)
    // npm install resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Synergistic Interaction <noreply@synergisticinteraction.com.au>',
    //   to: destinationEmail,
    //   replyTo: body.email,
    //   subject: `Category Assessment Request — ${sanitise(body.organisation)}`,
    //   text: emailBody,
    // });

    // OPTION B: Log to console until email service is configured
    console.log(`[contact] New submission from ${body.email}:\n${emailBody}`);

    // TODO: Remove this log and uncomment Resend before go-live
    if (!process.env.RESEND_API_KEY) {
      console.warn('[contact] RESEND_API_KEY not set — form submission logged only, no email sent');
    }

    // Suppress unused variable warning
    void destinationEmail;

    return NextResponse.json({ success: true, message: 'Assessment request received.' }, { status: 200 });
  } catch (error) {
    console.error('[contact] Error processing submission:', error);
    return NextResponse.json({ error: 'Internal server error. Please email us directly.' }, { status: 500 });
  }
}
