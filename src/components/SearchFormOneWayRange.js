import React from 'react';
import AutosuggestionInput from './AutoSuggestionInput'; // Make sure to adjust the import path


function SearchForm({ searchParams, handleSearchChange, fetchFlights, loading }) {
  const maxPassengers = 9;
  const maxAdults = maxPassengers - searchParams.children - searchParams.infants;


  return (
    <div className="search-form-container">
      <h1 className="search-form-heading">Search for Flights One Way Range</h1>
      <div className="search-form">
      <div className="form-row">
        <p>Fly From</p>
          <AutosuggestionInput
            value={searchParams.fly_from}
            onChange={(value) => handleSearchChange({ target: { name: 'fly_from', value } })}
          />
          <p>Fly To</p>
          <AutosuggestionInput
            value={searchParams.fly_to}
            onChange={(value) => handleSearchChange({ target: { name: 'fly_to', value } })}
          />
        </div>
        <div className="form-row">
          <p>Date From</p>
          <input
            type="date"
            name="date_from"
            value={searchParams.date_from}
            onChange={handleSearchChange}
            className="input-field"
          />
          <p>Date To</p>
          <input
            type="date"
            name="date_to"
            value={searchParams.date_to}
            onChange={handleSearchChange}
            className="input-field"
          />
          <input
            type="hidden"
            name="return_from"
            value={searchParams.return_from = ''}
            onChange={handleSearchChange}
            className="input-field"
          />
          <input
            type="hidden"
            name="return_to"
            value={searchParams.return_to = ''}
            onChange={handleSearchChange}
            className="input-field"
          />
        </div>
        <div className="form-row">
          <p>Passengers</p>
          <label htmlFor="adults">Adults: {searchParams.adults}</label>
          <input
            type="range"
            id="adults"
            name="adults"
            min="1"
            max={maxAdults}
            value={searchParams.adults}
            onChange={handleSearchChange}
            className="range-field"
          />
        </div>
        <div className="form-row">
          <label htmlFor="children">Children: {searchParams.children}</label>
          <input
            type="range"
            id="children"
            name="children"
            min="0"
            max={maxPassengers - searchParams.adults - searchParams.infants}
            value={searchParams.children}
            onChange={handleSearchChange}
            className="range-field"
          />
        </div>
        <div className="form-row">
          <label htmlFor="infants">Infants: {searchParams.infants}</label>
          <input
            type="range"
            id="infants"
            name="infants"
            min="0"
            max={maxPassengers - searchParams.adults - searchParams.children}
            value={searchParams.infants}
            onChange={handleSearchChange}
            className="range-field"
          />
          </div>
        </div>
        <div className="form-row">
          <p>Cabin Class</p>
          <select
            name="selected_cabins"
            value={searchParams.selected_cabins}
            onChange={handleSearchChange}
            className="input-field"
          >
            <option value="M">Economy</option>
            <option value="C">Business</option>
            <option value="F">First Class</option>
          </select>
        </div>
        <div className="form-row">
          <button type="button" onClick={fetchFlights} className="search-button">
            Search Flights
          </button>
        </div>
      </div>
  );
}

export default SearchForm;
