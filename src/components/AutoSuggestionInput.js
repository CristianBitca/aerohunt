import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AutosuggestionInput({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  useEffect(() => {
    async function fetchSuggestions(query) {
      if (!query) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://tequila-api.kiwi.com/locations/query`,
          {
            params: {
              term: query,
            },
            headers: {
              apikey: 'LGwBSu6i6Er6b37K1HhtaodbtQqDKI24',
              accept: 'application/json',
            },
          }
        );
        setSuggestions(response.data.locations || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSuggestions(value);
  }, [value]);

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setShowSuggestions(false);
    onChange(suggestion.code);
  };

  return (
    <div className="autosuggestion-container">
      <input
        type="text"
        value={selectedSuggestion ? selectedSuggestion.name : value}
        onChange={(event) => {
          setSelectedSuggestion(null);
          onChange(event.target.value);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => setShowSuggestions(false), 200);
        }}
        placeholder="Search for a location"
        className="input-field"
      />
      {selectedSuggestion && (
        <input
          type="hidden"
          name="locationCode"
          value={selectedSuggestion.code}
        />
      )}
      {showSuggestions && (
        <div className="suggestion-list-container">
          {isLoading ? (
            <div>Loading suggestions...</div>
          ) : (
            <ul className="suggestion-list">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.code}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion.name} ({suggestion.type})
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default AutosuggestionInput;
