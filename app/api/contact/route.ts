// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const formData = await req.json();
    const res = await fetch(process.env.EMAIL_PROVIDER_URL ?? 'https://email-provider.paral.no/send-email', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
      cache: 'no-store',
      signal: controller.signal,
    });
    const ct = res.headers.get('content-type') || '';
    const payload = ct.includes('application/json')
      ? await res.json().catch(() => ({ message: 'Invalid JSON from provider' }))
      : { message: await res.text() };

    if (!res.ok) {
      return NextResponse.json(
        { error: (payload as any).error || (payload as any).message || 'Failed to send email' },
        { status: res.status }
      );
    }
    return NextResponse.json(payload, { status: 200 });
  } catch (err: any) {
    const aborted = err?.name === 'AbortError';
    return NextResponse.json(
      { error: aborted ? 'Upstream timeout' : 'Internal server error' },
      { status: aborted ? 504 : 500 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
