import { PlaylistItem } from "../vlc";

interface PlaylistProps {
  playlistItems: PlaylistItem[];
}
export const Playlist: React.FunctionComponent<PlaylistProps> = ({
  playlistItems,
}) => {
  return (
    <div>
      <h1>This is your playlist</h1>
      <div>
        {playlistItems.map(({ name, uri, current }, index) => (
          <div key={index}>
            <span>{index + 1}. </span>
            <span>{name} </span>
            <span>{uri} </span>
            {current && <span>Now Playing</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
