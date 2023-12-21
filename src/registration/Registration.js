import "./Registration.css";
import Heading from "../adsbox/heading/Heading";
import { useState } from "react";
const initdata = {
  fname: "",
  lname: "",
  add1: "",
  add2: "",
  mobile: "",
  emailid: "",
};
function Registration() {
  const [getdata, setGetdata] = useState(initdata);
  function getdatasub(e) {
    let name = e.target.name;
    let value = e.target.value;
    setGetdata((obj) => {
      obj[name] = value;
      return { ...obj };
    });
  }
  function adddatasub(e) {
    e.preventDefault();
    console.log(getdata.fname);
  }
  return (
    <>
      <form onSubmit={adddatasub}>
        <div>
          <div>
            <Heading head="Registration Form" />
          </div>
          <div>
            <div className="label_style"> First Name :</div>
            <input
              type="text"
              className="textbox_style"
              name="fname"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="label_style"> Last Name :</div>
            <input
              type="text"
              className="textbox_style"
              name="lname"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="label_style"> Address Line 1 :</div>
            <input
              type="text"
              className="textbox_style"
              name="add1"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="label_style"> Address Line 2 :</div>
            <input
              type="text"
              className="textbox_style"
              name="add2"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="label_style"> Mobile No :</div>
            <input
              type="number"
              className="textbox_style"
              name="mobile"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="label_style"> Email Id :</div>
            <input
              type="email"
              className="textbox_style"
              name="emailid"
              onChange={getdatasub}
            />
          </div>
          <br />
          <input type="submit" value="Add" className="button_style" />
        </div>
      </form>
    </>
  );
}

export default Registration;
