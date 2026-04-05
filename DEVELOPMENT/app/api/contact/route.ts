// Contact form API — Resend integration
// V7 §11.3: Captures: name, org, role, email, phone, categories, message, referral
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL ?? 'jt@synergisticinteraction.com.au';

    const emailText = `
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

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: emailError } = await resend.emails.send({
        from: 'Website <noreply@synergisticinteraction.com.au>',
        to: [destinationEmail],
        replyTo: body.email,
        subject: `Category Assessment Request — ${sanitise(body.organisation)}`,
        html: `
          <h2>New Category Assessment Request</h2>
          <p><strong>Name:</strong> ${sanitise(body.name)}</p>
          <p><strong>Organisation:</strong> ${sanitise(body.organisation)}</p>
          <p><strong>Role:</strong> ${sanitise(body.role)}</p>
          <p><strong>Email:</strong> ${sanitise(body.email)}</p>
          <p><strong>Phone:</strong> ${body.phone ? sanitise(body.phone) : '—'}</p>
          <p><strong>Categories:</strong> ${body.categories.map(sanitise).join(', ')}</p>
          <p><strong>Message:</strong><br>${sanitise(body.message)}</p>
          <p><strong>Referral:</strong> ${body.referral ? sanitise(body.referral) : '—'}</p>
          <hr>
          <p style="color:#888;font-size:12px;">Submitted via synergisticinteraction.com.au/get-started</p>
        `,
        text: emailText,
      });

      if (emailError) {
        console.error('[contact] Resend error:', emailError);
      }
    } else {
      // RESEND_API_KEY not set — log to console only
      console.log(`[contact] New submission from ${body.email}:\n${emailText}`);
      console.warn('[contact] RESEND_API_KEY not set — form submission logged only, no email sent');
    }

    return NextResponse.json({ success: true, message: 'Assessment request received.' }, { status: 200 });
  } catch (error) {
    console.error('[contact] Error processing submission:', error);
    return NextResponse.json({ error: 'Internal server error. Please email us directly.' }, { status: 500 });
  }
}
