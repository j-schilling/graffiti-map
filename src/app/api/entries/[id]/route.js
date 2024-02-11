import { getEntryById } from "../../../services/entryServices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const entry = await getEntryById(id);

  return NextResponse.json({ entry }, { status: 200 });
}
