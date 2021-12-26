export interface VLCPlaylistItem {
  "@_ro": string;
  "@_name": string;
  "@_id": string;
  "@_duration": string;
  "@_uri": string;
  "@_current"?: string;
}

export interface PlaylistItem {
  name: string;
  uri: string;
  current?: boolean;
}
