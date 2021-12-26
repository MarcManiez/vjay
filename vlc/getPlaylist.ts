import axios from "axios";
import { PlaylistItem } from "./types";

/**
 * Assumes this is called on the client
 */
export const fetchPlaylist = async (): Promise<PlaylistItem[]> => {
  const { data } = await axios.get("/api/vlc/getPlaylist");
  return data.playlistItems;
};
