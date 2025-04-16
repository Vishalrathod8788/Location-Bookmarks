import LocationCard from "./LocationCard";

function LocationList({ locations, onRemoveLocation }) {
  if (locations.length === 0) {
    return (
      <div className="empty-message">
        <p>No locations saved yet. Add your first location above!</p>
      </div>
    );
  }

  return (
    <div className="locations-container">
      <h2 className="section-title">Your Saved Locations</h2>
      <div className="locations-grid">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            onRemoveLocation={onRemoveLocation}
          />
        ))}
      </div>
    </div>
  );
}

export default LocationList;
