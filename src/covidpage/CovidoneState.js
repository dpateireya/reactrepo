import React, { useState } from "react";
import "./Covidpage.css";
const CovidoneState = (props) => {
  const [Data, setData] = useState([]);

  const setSelectData = (e) => {
    let value = e.target.value;
    setData((pre) => {
      pre = props.data.filter((item, index) => {
        return value === item.loc;
      });
      return pre[0];
    });
  };

  return (
    <>
      <div className="text-center m-0">
        <div>
          <p className="h1">India's State Covid 19 Corona Virus Tracker</p>
        </div>
        <div className="w-100 h-25">
          <span className="fw-bolder fs-3 m-sm-2">Select State :</span>
          <select
            className="dropdown-center w-25 form-control-lg collapse-horizontal"
            onChange={setSelectData}
          >
            {props.data.map((item, index) => {
              return (
                <option key={index} value={item.loc}>
                  {item.loc}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <div className="covid_body_style">
          <label className="covid_label_style">State {Data.loc}</label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Case Confirmed {Data.confirmedCasesIndian}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Discharge {Data.discharged}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">Deaths {Data.deaths}</label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Total Case {Data.totalConfirmed}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style"></label>
        </div>
      </div>
    </>
  );
};

export default CovidoneState;
