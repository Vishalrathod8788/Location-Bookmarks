import { useState, useEffect } from "react";
import LocationForm from "./components/LocationForm";
import LocationList from "./components/LocationList";

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  const addLocation = (newLocation) => {
    setLocations([...locations, newLocation]);
  };

  const removeLocation = (id) => {
    const updatedLocations = locations.filter((location) => location.id !== id);
    setLocations(updatedLocations);
  };

  return (
    <main className="container">
      <h1 className="title">Location Bookmarks</h1>
      <LocationForm onAddLocation={addLocation} />
      <LocationList locations={locations} onRemoveLocation={removeLocation} />
    </main>
  );
}

export default App;
