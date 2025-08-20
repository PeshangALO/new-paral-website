// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch('https://email-provider.paral.no/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
      cache: 'no-store',
    });

    clearTimeout(timeout);

    const ct = res.headers.get('content-type') || '';
    const payload = ct.includes('application/json')
      ? await res.json()
      : { message: await res.text() };

    if (!res.ok) {
      return NextResponse.json(
        { error: payload.error || payload.message || 'Failed to send email' },
        { status: res.status }
      );
    }

    return NextResponse.json(payload, { status: 200 });
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      return NextResponse.json({ error: 'Upstream timeout' }, { status: 504 });
    }
    console.error('Error in contact API route:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
