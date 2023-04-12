
import { useState } from 'react';
import './App.css';
import ChartContainer from './containers/ChartContainer';

function App() {

const [chart, setChart] = useState("")

// const fetchChart = function() {
//   const request = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
//   .then(response => response.json())
//   .then(data => setChart(data.feed.entry))
// }

  return (
    <>
   <h1>Current iTunes UK Top 20</h1>
    <ChartContainer/>
</>
  );
}

export default App;
