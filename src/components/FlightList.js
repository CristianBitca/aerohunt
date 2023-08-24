import React from 'react';
import FlightCard from './FlightCard';  

function FlightList({ flights, loading }) {
  return (
    <div className="flight-list-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flight-cards">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FlightList;