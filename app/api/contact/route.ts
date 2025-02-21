// app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    console.log('Request body:', req);
    try {
      const formData = await req.json();
      console.log('Form data:', formData); // log incoming data
  
      const response = await fetch('http://email-provider.paral.no/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error response from email provider:', errorData); // log the error response
        return NextResponse.json(
          { error: errorData.message || 'Failed to send email' },
          { status: response.status }
        );
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
  