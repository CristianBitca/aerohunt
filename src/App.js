import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import FormSelector from './components/FormSelector';
import FlightList from './components/FlightList';

const serverBaseUrl = 'https://master.dr8jgwthbywdg.amplifyapp.com';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    fly_from: '',
    fly_to: '',
    date_from: '',
    date_to: '',
    return_from: '',
    return_to: '',
    adults: '1',
    children: '0',
    infants: '0',
    selected_cabins: 'M',
  });

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  const fetchFlights = async () => {
    try {
      setLoading(true);

      const reformattedSearchParams = {
        ...searchParams,
        date_from: reformatDate(searchParams.date_from),
        date_to: reformatDate(searchParams.date_to),
      };

      const response = await axios.get(`${serverBaseUrl}/flights`, {
        params: reformattedSearchParams,
      });

      setFlights(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setLoading(false);
    }
  };

  const reformatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="App">
      <Header />
      <div>
        <FormSelector
          searchParams={searchParams}
          handleSearchChange={handleSearchChange}
          fetchFlights={fetchFlights}
          loading={loading}
        />
      </div>
      <div>
        <FlightList flights={flights} loading={loading} />
      </div>
    </div>
  );
}

export default App;
