import { useEffect, useState } from "react";
import { fetchCoordinates } from "./services";

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>International Space Station Location Tracker</h2>
      {coordinates && (
      <>
        <h3>{`Latitude: ${coordinates.latitude}`}</h3>
        <h3>{`Latitude: ${coordinates.longitude}`}</h3>
      </>
      )}
    </>
  )
}

export default App;
