import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { XMLParser } from "fast-xml-parser";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get(
    `http://localhost:9090/requests/playlist.xml`,
    {
      auth: {
        username: "",
        password: "asdf",
      },
    }
  );
  const parser = new XMLParser({ ignoreAttributes: false });
  const jsonObj = parser.parse(response.data);
  const playlistItems = jsonObj.node.node[0].leaf
    ? Array.isArray(jsonObj.node.node[0].leaf)
      ? jsonObj.node.node[0].leaf
      : [jsonObj.node.node[0].leaf]
    : undefined;
  res.status(200).json({ playlistItems: playlistItems });
}
