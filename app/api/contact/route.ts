// app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    try {
      const formData = await req.json();
  
      const response = await fetch('https://email-provider.paral.no/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from email provider:', errorData);
        return NextResponse.json({ error: errorData.message || 'Failed to send email' }, { status: response.status });
      }
  
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      console.error('Error in contact API route:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
  