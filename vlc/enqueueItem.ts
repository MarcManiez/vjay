import axios from "axios";
import { PlaylistItem } from ".";

/**
 * Assumes this is called on the client
 */
export const enqueueItem = async (item: PlaylistItem) => {
  await axios.post("/api/vlc/enqueueItem", item);
};
