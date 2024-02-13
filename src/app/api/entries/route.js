import { NextRequest, NextResponse } from "next/server";
import Entry from "@/db/models/Entry";
import dbConnect from "@/db/connect";

export async function GET(request) {
  await dbConnect();
  const entries = await Entry.find();
  return NextResponse.json({ entries }, { status: 200 });
}
