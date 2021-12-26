import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

import { parse } from "csv-parse/sync";

import path from "path";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const videosPath = path.join(__dirname, "../../../../videos.csv");
  const videosCSV = await fs.readFile(videosPath, "utf8");
  const records = parse(videosCSV, { columns: true });
  console.log(records);
  res.status(200).json(records);
}
