
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, date, time } = body;

    // Validate required fields
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Google authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

  const timestamp = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  dateStyle: "short",
  timeStyle: "medium",
}).format(new Date());

    // Add appointment to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            name,
            phone,
            date,
            time,
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Appointment request submitted successfully.",
    });
  } catch (error) {
    console.error("Appointment submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
