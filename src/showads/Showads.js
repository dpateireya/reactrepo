import Adsbox from "../adsbox/Adsbox";
import Adsdata from "../adsbox/AdsData";
import "./Showads.css";
import { useState } from "react";
let isShowdata = false;

const initdata = [
  {
    head: "",
    details: "",
  },
];
const getdata = {
  head: "",
  details: "",
};
function Showads() {
  const [islogin, setLogin] = useState(false);
  const [filldata, setFillData] = useState([]);

  // display ads box
  function authsub() {
    setLogin(true);
  }

  // reset all ads box value
  function logoutsub() {
    setFillData(initdata);
    setLogin(false);
    isShowdata = false;
  }

  // dispaly addata.js file object value
  function fillDatasub() {
    isShowdata = true;
    setFillData(Adsdata);
  }

  //set value in onchange event
  function getdatasub(e) {
    let name = e.target.name;
    let value = e.target.value;
    getdata[name] = value;
  }

  // pass the value in usestate
  function addDatasub() {
    setFillData((obj) => {
      return [...obj, getdata];
    });
    isShowdata = true;
  }

  return (
    <>
      {islogin ? (
        <>
          <div>
            <button className="button_style" onClick={logoutsub}>
              Hide AdsBox
            </button>
          </div>
          {isShowdata &&
            filldata.map((obj) => {
              return <Adsbox head={obj.head} details={obj.details} />;
            })}
          <button className="button_style" onClick={fillDatasub}>
            Fill Data
          </button>
          <br />
          <div>
            <div className="label_style"> Heading :</div>
            <input
              className="textbox_style"
              name="head"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="label_style"> Details :</div>
            <input
              className="textbox_style"
              name="details"
              onChange={getdatasub}
            />
          </div>
          <br />
          <button className="button_style" onClick={addDatasub}>
            Add Data
          </button>
        </>
      ) : (
        <button className="button_style" onClick={authsub}>
          Show Adsbox
        </button>
      )}
    </>
  );
}

export default Showads;
