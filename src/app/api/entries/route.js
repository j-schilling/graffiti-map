import { getAllEntries } from "../../services/entryServices";
import { NextResponse } from "next/server";

export async function GET(request) {
  const entries = await getAllEntries();
  return NextResponse.json({ entries }, { status: 200 });
}
