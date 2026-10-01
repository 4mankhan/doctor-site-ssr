import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  try {
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

    const mockData = [
      timestamp,
      "Test Child",
      "9876543210",
      "2026-10-15",
      "Morning (10 AM - 1 PM)",
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [mockData],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Mock data added to Google Sheet successfully.",
      data: mockData,
      updatedRange: response.data.updates?.updatedRange,
    });
  } catch (error) {
    console.error("Google Sheet test error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add mock data to Google Sheet.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}