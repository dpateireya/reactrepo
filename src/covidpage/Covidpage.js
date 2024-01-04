import { useEffect, useState } from "react";
import "./Covidpage.css";
import CovidoneState from "./CovidoneState";
import CovidStateTable from "./CovidStateTable";
import CovidCountry from "./CovidCountry";
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

  // total india covid19 patient
  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = async () => {
    const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const item = await res.json();
    Initcountry.lastRefreshed = item.lastRefreshed;
    const data = await item.data.summary;
    const state = await item.data.regional;
    Initcountry.confirmedCasesIndian = data.confirmedCasesIndian;
    Initcountry.deaths = data.deaths;
    Initcountry.discharged = data.discharged;
    Initcountry.total = data.total;
    setCountry(Initcountry);
    setState(state);
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <CovidoneState data={State} />
        </div>
        <div class="row">
          <CovidCountry data={Country} />
        </div>
        <div class="row">
          <CovidStateTable data={State} />
        </div>
      </div>
    </>
  );
};

export default Covidpage;
