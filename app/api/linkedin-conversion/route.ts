
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { eventType, conversionTime } = body;

  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const conversionId = process.env.LINKEDIN_CONVERSION_ID;

  if (!accessToken || !conversionId) {
    return NextResponse.json(
      { error: "LinkedIn API credentials are not configured." },
      { status: 500 }
    );
  }

  const url = `https://api.linkedin.com/rest/conversions/${conversionId}`;

  const payload = {
    conversion: `urn:li:conversion:${conversionId}`,
    conversionTime: conversionTime || new Date().getTime(),
    conversionValue: {
      amount: 1.0,
      currencyCode: "NOK",
    },
    user: {
      userIds: [],
    },
    ...(eventType && { eventType }),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
        "LinkedIn-Version": "202308",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify({
        events: [payload],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("LinkedIn API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to send conversion to LinkedIn.", details: errorData },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending conversion to LinkedIn:", error);
    return NextResponse.json(
      { error: "An internal error occurred." },
      { status: 500 }
    );
  }
}
