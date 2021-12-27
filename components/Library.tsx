import { PlaylistItem } from "../vlc";

interface LibraryProps {
  libraryItems: PlaylistItem[];
  onEnqueue: (item: PlaylistItem) => void;
}
export const Library: React.FunctionComponent<LibraryProps> = ({
  libraryItems,
  onEnqueue,
}) => {
  return (
    <div>
      <h1>This is your Library</h1>
      <div>
        {libraryItems.map(({ name, uri }, index) => (
          <div key={index}>
            <span>{name} </span>
            <span>{uri} </span>
            <button onClick={() => onEnqueue({ name, uri })}>Enqueue</button>
          </div>
        ))}
      </div>
    </div>
  );
};
