import React from 'react';
import logo from '../logo2.png';

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <img src={logo} alt="logo" />
        <h1>Metasearch Engine For Cheap Flights</h1>
      </div>
    </header>
  );
}

export default Header;
