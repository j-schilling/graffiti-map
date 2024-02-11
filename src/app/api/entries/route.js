import { getAllEntries } from "../../../../services/entryServices";

export default function handler(req, res) {
  res.status(200).json(getAllEntries());
}
