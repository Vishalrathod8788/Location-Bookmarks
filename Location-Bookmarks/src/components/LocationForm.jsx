import { useState } from "react";

function LocationForm({ onAddLocation }) {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim()) {
      setError("Please enter a location name");
      return;
    }

    const lat = Number.parseFloat(latitude);
    const lng = Number.parseFloat(longitude);

    // Validate latitude (-90 to 90)
    if (isNaN(lat) || lat < -90 || lat > 90) {
      setError("Latitude must be a number between -90 and 90");
      return;
    }

    // Validate longitude (-180 to 180)
    if (isNaN(lng) || lng < -180 || lng > 180) {
      setError("Longitude must be a number between -180 and 180");
      return;
    }

    // Create new location object
    const newLocation = {
      id: Date.now(), // Simple unique ID
      name,
      latitude: lat,
      longitude: lng,
      createdAt: new Date().toLocaleString(),
    };

    // Add the location
    onAddLocation(newLocation);

    // Reset form
    setName("");
    setLatitude("");
    setLongitude("");
    setError("");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Location</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Location Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter location name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="latitude">Latitude</label>
          <input
            id="latitude"
            type="text"
            placeholder="Enter latitude (e.g., 19.076)"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            type="text"
            placeholder="Enter longitude (e.g., 72.8777)"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">
          Save Location
        </button>
      </form>
    </div>
  );
}

export default LocationForm;
