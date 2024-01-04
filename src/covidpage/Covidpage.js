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
      <div class="container">
        <div class="row">
          <CovidoneState />
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
