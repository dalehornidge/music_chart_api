import SongItem from "./SongItem";

const SongList = ({songs}) => {
    const songItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index}/> 
    })
    return ( 
        <>
        <ul>
        {songItems}
        </ul>
        </>
     );
}
 
export default SongList
