import { ReactElement, useState } from "react";
import "./Song.tsx";
import { SongType } from "./SongTypes.ts";
import Song from "./Song.tsx";

//type SongProps = { title: string; artist: string };
// const SongList = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
//   const [song1, setSong1] = useState<SongType>({
//     title: "song1",
//     artist: "artis1",
//     numberOfSong: 2,
//   });
  // const [song2, setSong2] = useState<SongType>({
  //   title: "song2",
  //   artist: "artis2",
  //   numberOfSong: 3,
  // });
  const initialsongs:SongType[]=[
  {
    title: "song1",
    artist: "artis1",
    numberOfSong: 2,
  },   {
    title: "song1",
    artist: "artis1",
    numberOfSong: 2,
  }, 
  {
    title: "song1",
    artist: "artis1",
    numberOfSong: 2,
  }

  ]
  const [songs,setSongs]= useState<SongType[]> (initialsongs);
  const displaySongs:JSX.Element[]=songs.map((song,index)=>{
    return <Song key={index} song={song} recordVote={()=>{}}/>
  })
  // const voteForSong1 = () => {
  //   //song1.numberOfSong+=1;
  //   setSong1({ ...song1, numberOfSong: song1.numberOfSong + 1 });
  // };
  // const voteForSong2 = () => {
  //   //song1.numberOfSong+=1;
  //   setSong2({ ...song2, numberOfSong: song2.numberOfSong + 1 });
  // };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const toggleShowAll=():void=>{setShowAll(!showAll)}
  const addVote = (title:string):void =>{
    const newSongs=songs.map((song)=> {return song.title==title?{...song,votes:song.numberOfSong+1}:song})
    setSongs(newSongs)
  }
  return (
    <div>
      <ul style={{ display: visible ? "block" : "none" }}>
        {/* <Song song={song1} recordVote={voteForSong1} />
        <Song song={song2} recordVote={voteForSong2} /> */}
        {songs.map((song,index)=>{
    return <Song key={index} song={song} recordVote={()=>{addVote(song.title)}}/>;})}

    {showAll && songs.map(song, index) =>
    }
      </ul>

      <button onClick={toggleVisibility}>
        {visible ? "Hide songs" : "Show Songs"}
      </button>
    </div>
  );
};
export default SongList;
