import React from 'react';

function formatDateTime(dateTimeString) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
  };

  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateTimeString));
}

function FlightCard({ flight }) {
  const hasReturn = flight.route.some(route => route.return === 1);

  return (
    <div className="flight-card">
      <div className="flight-columns">
        <div className="flight-column">
          <h2>Outbound Flight</h2>
          {flight.route
            .filter(route => route.return === 0)
            .map((route, index) => (
              <div key={index} className="flight-leg">
                <p className="airport-name">{route.cityFrom}</p>
                <p className="departure-time">{formatDateTime(route.local_departure)}</p>
                <p className="airport-name">{route.cityTo}</p>
                <p className="arrival-time">{formatDateTime(route.local_arrival)}</p>
                {index < flight.route.length - 1 && <hr className="separator" />}
              </div>
            ))}
        </div>

        {hasReturn && (
          <div className="flight-column">
            <h2>Return Flight</h2>
            {flight.route
              .filter(route => route.return === 1)
              .map((route, index) => (
                <div key={index} className="flight-leg">
                  <p className="airport-name">{route.cityFrom}</p>
                  <p className="departure-time">{formatDateTime(route.local_departure)}</p>
                  <p className="airport-name">{route.cityTo}</p>
                  <p className="arrival-time">{formatDateTime(route.local_arrival)}</p>
                  {index < flight.route.length - 1 && <hr className="separator" />}
                </div>
              ))}
          </div>
        )}

        <div className="flight-column">
          <h2>Price</h2>
          <p className="price">£{flight.price}</p>
          <a
            href={flight.deep_link}
            target="_blank"
            rel="noopener noreferrer"
            className="details-button"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
