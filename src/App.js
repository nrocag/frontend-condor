import React from 'react';
import './Sass/App.scss';
import ReactSearchBox from 'react-search-box';
import Select from 'react-select';
import Collapsible from 'react-collapsible';

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
          <div className="card body-card">
            <label className="filter-head">FILTER COURSE RESULTS</label>
          </div>

          <div className="card body-card">
            <Collapsible trigger="Course type" open={true}>

              <label htmlFor="selfPaced" className="radio">
                <input type="radio" name="courseType" id="selfPaced" className="hidden" />
                <span className="label"></span>Self paced
                </label><br />
              <label htmlFor="live" className="radio">
                <input type="radio" name="courseType" id="live" className="hidden" />
                <span className="label"></span>Live
                </label>
            </Collapsible>
          </div>

          <div className="card body-card">
            <Collapsible trigger="Delivery type" open={true}>
              <label htmlFor="anyDeliveryType" className="radio">
                <input type="radio" name="deliveryType" id="anyDeliveryType" className="hidden" />
                <span className="label"></span>Any delivery type
                </label>

              <label htmlFor="computerbaseTraining" className="radio">
                <input type="radio" name="deliveryType" id="computerbaseTraining" className="hidden" />
                <span className="label"></span>Computer-base training
                </label>

              <label htmlFor="correspondence" className="radio">
                <input type="radio" name="deliveryType" id="correspondence" className="hidden" />
                <span className="label"></span>Correspondence
                </label>

              <label htmlFor="mailedMaterial" className="radio">
                <input type="radio" name="deliveryType" id="mailedMaterial" className="hidden" />
                <span className="label"></span>Mailed material
                </label>
            </Collapsible>
          </div>

          <div className="card body-card">
            <Collapsible trigger="Subject area" open={true}>
              <label htmlFor="anySubjectArea" className="radio">
                <input type="radio" name="subjectArea" id="anySubjectArea" className="hidden" />
                <span className="label"></span>Any subject area
                </label>

              <label htmlFor="hivhids" className="radio">
                <input type="radio" name="subjectArea" id="hivhids" className="hidden" />
                <span className="label"></span>HIV/HIDS
                </label>

              <label htmlFor="endofLife" className="radio">
                <input type="radio" name="subjectArea" id="endofLife" className="hidden" />
                <span className="label"></span>End-of-Life Cafe and Paliable Heart Care
                </label>

              <label htmlFor="domesticViolence" className="radio">
                <input type="radio" name="subjectArea" id="domesticViolence" className="hidden" />
                <span className="label"></span>Domestic Violence
                </label>
            </Collapsible>
          </div>
        </div>
        <div className="card card-result">
          <div className="result-count">
            <div>
              <label className="bold">Page 1</label> of <label className="bold">1789 results</label>
            </div>
            <div className="sort">
              <label >Sorted by: </label><Select className="sort" />
            </div>
          </div>
          <div className="card">
            <div className="body-card result">
              <div className="result-imagen"><img width="200" height="150" src="https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg"></img></div>
              <div className="result-text">
                <div className="result-title"><label>Preventing Medical Errors</label><label className="money">$ 24.00</label></div>
                <div className="result-state"><label>Featured</label></div>
                <div className="result-ubication"><label>FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER</label></div>
                <div className="result-time">
                  <label><i className="fa fa-clock-o" /> 2 Hours <i className="fa fa-laptop" /> Computer-Based training</label>
                  <button><i className="fa fa-share-square-o" /> </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
