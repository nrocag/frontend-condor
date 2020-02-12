import React from 'react';
import logo from './logo.svg';
import './Sass/App.scss'
import ReactSearchBox from 'react-search-box'
import Select from 'react-select'


function App() {
  return (
    <div>
      <header className="header-container">
        <div className="header-center">
          <label className="label-text">Find CE for a</label> <Select /><Select />
        </div>

        <div className="header-center">
          <ReactSearchBox className="search-bar-container" placeholder="Search courses and providers" />
        </div>

        <div className="header-center">
          <a href="#">COURSES</a><a href="#">PROVIDERS</a>
        </div>
      </header>
    </div >
  );
}

export default App;
