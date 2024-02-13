import { NextRequest, NextResponse } from "next/server";
import Entry from "@/db/models/Entry";
import dbConnect from "@/db/connect";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;
  const entry = await Entry.findById(id);

  return NextResponse.json({ entry }, { status: 200 });
}
