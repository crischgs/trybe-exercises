import { useEffect, useState } from "react";
import { fetchCoordinates } from "./services";

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>International Space Station Location Tracker</h2>
    </div>
  )
}

export default App;
