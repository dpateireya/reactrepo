import React from "react";

const CovidCountry = (props) => {
  return (
    <>
      <div className="text-center m-0">
        <div>
          <p className="h1">India Covid 19 Corona Virus Tracker</p>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">INDIA</label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Case Confirmed {props.data.confirmedCasesIndian}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Discharge {props.data.discharged}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Deaths {props.data.deaths}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Total Case {props.data.total}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Last Update {props.data.lastRefreshed}
          </label>
        </div>
      </div>
    </>
  );
};

export default CovidCountry;
