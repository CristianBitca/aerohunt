  import React from 'react';
  import logo from '../logo2.png';

  function Header() {
    return (
      <header className="App-header">
        <div className="container">
        <a href="https://www.aerohunt.net">
          <img src={logo} alt="logo" /></a>
          <h1>Metasearch Engine For Cheap Flights</h1>
        </div>
      </header>
    );
  }

  export default Header;
