import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { PlaylistItem } from "../../../vlc";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { uri } = req.body as PlaylistItem;
  await axios.get(
    `http://localhost:9090/requests/status.xml?command=in_enqueue&input=${uri}`,
    {
      auth: {
        username: "",
        password: "asdf",
      },
    }
  );
  res.status(201);
}
