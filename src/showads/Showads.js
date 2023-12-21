import Adsbox from "../adsbox/Adsbox";
import Adsdata from "../adsbox/AdsData";
import "./Showads.css";
const { useState } = require("react");

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
  const [filldata, setFillData] = useState(initdata);

  function authsub() {
    setLogin(true);
  }

  function logoutsub() {
    setFillData(initdata);
    setLogin(false);
  }
  function fillDatasub() {
    setFillData(Adsdata);
  }

  function getdatasub(e) {
    let name = e.target.name;
    let value = e.target.value;
    getdata[name] = value;
  }

  function addDatasub() {
    setFillData((obj) => {
      return [...obj, getdata];
    });
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
          {filldata.map((obj) => {
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
