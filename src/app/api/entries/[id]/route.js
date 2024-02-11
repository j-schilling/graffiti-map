import { getEntryById } from "../../../services/entryServices";
import { NextResponse } from "next/server";

// export default function handler(req, res) {
//   const { id } = req.query;
//   res.status(200).json(getEntryById(id));
// }
export async function GET(request) {
  const { id } = request.query;
  const entry = await getEntryById(id);
  return NextResponse.json({ entry }, { status: 200 });
}
