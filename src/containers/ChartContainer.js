import React, {useEffect, useState} from "react";
import SongList from "../components/SongList";
import SongItem from "../components/SongItem";


const ChartContainer = () => {

    const [songs, setSongs] = useState([])
    // const [selectedSong, setSelectedSong] = useState("")

    useEffect(() => {
       fetchChart() 
    },[])
    
    const fetchChart = function() {
  const request = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
  .then(response => response.json())
  .then(songs => setSongs(songs.feed.entry))
}



    return ( 
    <>
        <SongList songs={songs}/>
        </>
     );
}
 
export default ChartContainer;