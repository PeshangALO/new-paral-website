// app/api/contact/route.ts
import { NextResponse } from 'next/server';

const ORIGIN = process.env.PUBLIC_SITE_ORIGIN ?? 'https://paral.no';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type, authorization',
    'Access-Control-Max-Age': '86400',
  };
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export async function POST(req: Request) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const formData = await req.json();

    const res = await fetch(
      process.env.EMAIL_PROVIDER_URL ?? 'https://email-provider.paral.no/send-email',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
        cache: 'no-store',
        signal: controller.signal,
      }
    );

    const ct = res.headers.get('content-type') || '';
    const payload = ct.includes('application/json')
      ? await res.json().catch(() => ({ message: 'Invalid JSON from provider' }))
      : { message: await res.text() };

    if (!res.ok) {
      return NextResponse.json(
        { error: payload.error || payload.message || 'Failed to send email' },
        { status: res.status, headers: corsHeaders() }
      );
    }

    return NextResponse.json(payload, { status: 200, headers: corsHeaders() });
  } catch (err: any) {
    const aborted = err?.name === 'AbortError';
    return NextResponse.json(
      { error: aborted ? 'Upstream timeout' : 'Internal server error' },
      { status: aborted ? 504 : 500, headers: corsHeaders() }
    );
  } finally {
    clearTimeout(timeout);
  }
}
