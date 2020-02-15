import React from 'react';
import './Sass/App.scss';
import ReactSearchBox from 'react-search-box';
import Select from 'react-select';

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
          <div className="active"><a href="#">COURSES</a></div> 
          <div className="inactive"><a href="#">PROVIDERS</a></div> 
          
        </div>
      </header>
      <div className="body-container">
        <div className="card card-filter">
          <div className="card body-card-filter">
            FILTER COURSE RESULTS
            <br /><br />
          </div>

          <div className="card body-card-filter">
            Course type
            <br /><br />
            <div>
              <input type="radio" id="selfPaced" name="courseType" />
              <label htmlFor="selfPaced">Self paced</label>
              <br />
              <input type="radio" id="live" name="courseType" />
              <label htmlFor="live">Live</label>
              <br />
            </div>
          </div>

          <div className="card body-card-filter">
            Delivery type
            <br /><br />
            <div>
              <input type="radio" id="anyDeliveryType" name="deliveryType" />
              <label htmlFor="anyDeliveryType">Any delivery type</label>
              <br />
              <input type="radio" id="computerbaseTraining" name="deliveryType" />
              <label htmlFor="computerbaseTraining">Computer-base training</label>
              <br />
            </div>
          </div>
        </div>
        <div className="card card-result">
          <div className="card">
            Resultados
           
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
