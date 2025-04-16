function LocationCard({ location, onRemoveLocation }) {
  const { id, name, latitude, longitude, createdAt } = location;

  // Generate Google Maps URL
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="location-card">
      <div className="card-header">
        <h3 className="location-name">{name}</h3>
        <button onClick={() => onRemoveLocation(id)} className="delete-button">
          ✕
        </button>
      </div>

      <div className="location-details">
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p className="date-added">Added: {createdAt}</p>
      </div>

      <div className="card-actions">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Open in Map
        </a>
      </div>
    </div>
  );
}

export default LocationCard;
