import { NextRequest, NextResponse } from "next/server";
import Graffiti from "@/db/models/Graffiti";
import dbConnect from "@/db/connect";

export async function GET(request) {
  await dbConnect();
  const entries = await Graffiti.find();
  return NextResponse.json({ entries }, { status: 200 });
}

export async function POST(request, response) {
  await dbConnect();
  try {
    const entryData = await request.json();
    console.log("entrydata", entryData);

    await Graffiti.create(entryData);

    return NextResponse.json({ entryData }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
