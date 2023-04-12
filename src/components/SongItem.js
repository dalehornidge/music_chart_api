const SongItem = ({song}) => {

    return ( 
        <>
        <li>
        <h2>Title: {song['im:name'].label}</h2>
        <h2>Artist: {song['im:artist'].label}</h2>
        </li>
        </>
     );
}
 
export default SongItem;