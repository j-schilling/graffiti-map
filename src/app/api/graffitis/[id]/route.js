import { NextRequest, NextResponse } from "next/server";
import Graffiti from "@/db/models/Graffiti";
import dbConnect from "@/db/connect";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;
  const graffiti = await Graffiti.findById(id);

  return NextResponse.json({ graffiti }, { status: 200 });
}
