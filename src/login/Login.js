import Adsbox from '../adsbox/Adsbox';
import Adsdata from '../adsbox/AdsData';
const { useState } = require('react');

const initdata = [
  {
    head: '',
    details: '',
  },
];
const getdata = {
  head: '',
  details: '',
};
function Login() {
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
            <button onClick={logoutsub}>Logout</button>
          </div>
          {filldata.map((obj) => {
            return <Adsbox head={obj.head} details={obj.details} />;
          })}
          <button onClick={fillDatasub}> Fill Data</button>
          <br />
          <input name="head" onChange={getdatasub} /><br/>
          <input name="details" onChange={getdatasub} />
          <br />
          <button onClick={addDatasub}> Add Data</button>
        </>
      ) : (
        <button onClick={authsub}> Login</button>
      )}
    </>
  );
}

export default Login;
