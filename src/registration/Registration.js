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

  //this function get data in input tag and return update value of getdata object
  function getdatasub(e) {
    let name = e.target.name;
    let value = e.target.value;
    setGetdata((obj) => {
      obj[name] = value;
      return { ...obj };
    });
  }

  // show value of getdata object in console
  function adddatasub(e) {
    e.preventDefault();
    console.log(getdata);
  }
  //reset all input tag set null data
  function resetdatasub() {
    setGetdata(initdata);
  }

  return (
    <>
      <form onSubmit={adddatasub}>
        <div className="reg_form_style">
          <div>
            <Heading head="Registration Form" />
          </div>
          <div>
            <div className="reg_label_style"> First Name :</div>
            <input
              type="text"
              className="reg_textbox_style"
              name="fname"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="reg_label_style"> Last Name :</div>
            <input
              type="text"
              className="reg_textbox_style"
              name="lname"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="reg_label_style"> Address Line 1 :</div>
            <input
              type="text"
              className="reg_textbox_style"
              name="add1"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="reg_label_style"> Address Line 2 :</div>
            <input
              type="text"
              className="reg_textbox_style"
              name="add2"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="reg_label_style"> Mobile No :</div>
            <input
              type="number"
              className="reg_textbox_style"
              name="mobile"
              onChange={getdatasub}
            />
          </div>
          <div>
            <div className="reg_label_style"> Email Id :</div>
            <input
              type="email"
              className="reg_textemail_style"
              name="emailid"
              onChange={getdatasub}
            />
          </div>
          <br />
          <input type="submit" value="Add" className="reg_button_style" />
          <input
            type="button"
            value="Reset"
            onClick={resetdatasub}
            className="reg_button_style"
          />
        </div>
      </form>
    </>
  );
}

export default Registration;
