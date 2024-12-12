import { ReactElement } from "react";
import { SongProps } from "./SongTypes";

//type SongProps = { title: string; artist: string };
const Song = (props: SongProps): ReactElement => {
  const voteNow = (): void => props.recordVote();
  return (
    <>
      <li>
        Hello {props.song.title} by artist {props.song.artist} has{" "}
        {props.song.numberOfSong}
        <button onClick={voteNow}>Vote for this song</button>
      </li>
    </>
  );
};

export default Song;
