import "./App.css";
import axios from "axios";
import { useState } from "react";

//pk.65a909ec4c2b9a05da2bb94ee35398da
function App() {
  const [location, setLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=pk.65a909ec4c2b9a05da2bb94ee35398da&q=${searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0]);
    setLocation(res.data[0]);
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      {location.display_name && (
        <p>
          {location.display_name} is at lat and lon: {location.lat} /{" "}
          {location.lon}
        </p>
      )}
      <input onChange={handleSearch} placeholder="Search for a city" />
      <button onClick={getLocation}>Get Data</button>
    </div>
  );
}

export default App;
