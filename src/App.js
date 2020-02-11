import React from 'react';
import logo from './logo.svg';
import './Sass/App.scss'
import ReactSearchBox from 'react-search-box'
import Select from 'react-select'


function App() {
  return (
    <div>
      <header className="header-container">
        <div className="center">
          <Select /><Select />
        </div>

        <div className="center">
          <ReactSearchBox className="search-bar-container" placeholder="Search courses and providers" />
        </div>
      </header>
    </div >
  );
}

export default App;
