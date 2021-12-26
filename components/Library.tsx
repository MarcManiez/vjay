import { PlaylistItem } from "../vlc";

interface LibraryProps {
  libraryItems: PlaylistItem[];
}
export const Library: React.FunctionComponent<LibraryProps> = ({
  libraryItems,
}) => {
  return (
    <div>
      <h1>This is your Library</h1>
      <div>
        {libraryItems.map(({ name, uri }, index) => (
          <div key={index}>
            <span>{name} </span>
            <span>{uri} </span>
          </div>
        ))}
      </div>
    </div>
  );
};
