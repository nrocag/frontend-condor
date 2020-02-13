import React from 'react';
import logo from './logo.svg';
import './Sass/App.scss'
import ReactSearchBox from 'react-search-box'
import Select from 'react-select'


function App() {
  return (
    <div>
      <header className="header-container">
        <div className="center margin">
          <label className="label-text">Find CE for a</label> <Select /><Select />
        </div>

        <div className="center margin">
          <ReactSearchBox className="search-bar-container" placeholder="Search courses and providers" />
        </div>

        <div className="center">
          <div className="active"><a href="#">COURSES</a></div> <a href="#">PROVIDERS</a>
        </div>
      </header>
      <div className="body-container">
        <div className="center">
          Filtros
        </div>
        <div className="center">
          Resultados
        </div>
      </div>
    </div >
  );
}

export default App;
