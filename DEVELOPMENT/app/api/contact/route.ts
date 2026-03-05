// V7 §11: Contact form API route
// Handles Get Started form submissions — categories field added for product category selection
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  message: string;
  categories?: string[];
  referralSource?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;

    // Validate required fields
    const required: (keyof ContactFormData)[] = ['name', 'organisation', 'role', 'email', 'message'];
    for (const field of required) {
      if (!body[field] || typeof body[field] !== 'string' || body[field].trim().length === 0) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitise inputs (prevent XSS in any downstream HTML rendering)
    const sanitised: ContactFormData = {
      name: sanitise(body.name),
      organisation: sanitise(body.organisation),
      role: sanitise(body.role),
      email: sanitise(body.email),
      phone: body.phone ? sanitise(body.phone) : undefined,
      message: sanitise(body.message),
      categories: Array.isArray(body.categories)
        ? body.categories.map((c: string) => sanitise(String(c))).slice(0, 20)
        : [],
      referralSource: body.referralSource ? sanitise(body.referralSource) : undefined,
    };

    // TODO: Implement email notification via Resend or AWS SES
    // Example body:
    // Subject: New SI Enquiry — ${sanitised.organisation}
    // From: ${sanitised.name} <${sanitised.email}>
    // Role: ${sanitised.role}
    // Phone: ${sanitised.phone ?? 'Not provided'}
    // Categories: ${sanitised.categories?.join(', ') ?? 'None selected'}
    // Referral: ${sanitised.referralSource ?? 'Not provided'}
    // ---
    // ${sanitised.message}
    console.log('[contact] New enquiry from:', sanitised.email, '| Org:', sanitised.organisation);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function sanitise(input: string): string {
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
