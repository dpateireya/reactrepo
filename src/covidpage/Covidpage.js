import { useEffect, useState } from "react";
import "./Covidpage.css";
import CovidState from "./CovidState";
import CovidoneState from "./CovidoneState";
// https://api.rootnet.in/covid19-in/stats/latest
const Initcountry = {
  discharged: "",
  deaths: "",
  confirmedCasesIndian: "",
  total: "",
  lastRefreshed: "",
};
const Covidpage = () => {
  const [Country, setCountry] = useState([]);
  const [State, setState] = useState([]);

  const getCovidData = async () => {
    const item = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const data = await item.json();
    Initcountry.lastRefreshed = data.lastRefreshed;
    Initcountry.confirmedCasesIndian = data.data.summary.confirmedCasesIndian;
    Initcountry.deaths = data.data.summary.deaths;
    Initcountry.discharged = data.data.summary.discharged;
    Initcountry.total = data.data.summary.total;
    setCountry(Initcountry);
    setState(data.data.regional);
  };
  // total india covid19 patient
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div>
        <CovidoneState />
      </div>
      <div className="text-center m-0">
        <div>
          <p className="h1">Covid 19 Corona Virus Tracker</p>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">INDIA</label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Case Confirmed : {Country.confirmedCasesIndian}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Discharge : {Country.discharged}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">Deaths : {Country.deaths}</label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Total Case : {Country.total}
          </label>
        </div>
        <div className="covid_body_style">
          <label className="covid_label_style">
            Last Update: {Country.lastRefreshed}
          </label>
        </div>
      </div>

      <div>
        <div>
          <p className="h1 text-center">
            Covid 19 State-wise Corona Virus Tracker
          </p>
        </div>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {State.map((item, index) => {
              return (
                <>
                  <CovidState
                    index={index}
                    key={index}
                    id={index}
                    sno={index + 1}
                    loc={item.loc}
                    confirmedCasesIndian={item.confirmedCasesIndian}
                    discharged={item.discharged}
                    deaths={item.deaths}
                    totalConfirmed={item.totalConfirmed}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Covidpage;
