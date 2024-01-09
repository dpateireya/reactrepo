//https://script.google.com/macros/s/AKfycbxHRT8hVLorBxrjHIs8LT7kpyqQ_UDadCGlB85n_HiU9PKbm17dPV7mCE-EZnrd5wJlMQ/exec

import axios from "axios";

//import "./styles.css";

export default function App() {
  function handleDelete() {
    axios
      .delete(
        "https://script.google.com/macros/s/AKfycbxUoORKHNDx9QI-bpocqjkw0KFCOvToM522MDjWCH3Ag_nHjTYajX29TjMWwEcFFI3LLw/exec/2"
      )
      .then(console.log("axios"));
  }
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    const formDatab = new FormData(formEle);
    console.log(formDatab);
    fetch(
      "https://script.google.com/macros/s/AKfycbxUoORKHNDx9QI-bpocqjkw0KFCOvToM522MDjWCH3Ag_nHjTYajX29TjMWwEcFFI3LLw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <input placeholder="Your Id" name="Sno" type="text" />
        <input placeholder="Your Name" name="Name" type="text" />
        <input placeholder="Your Email" name="Email" type="text" />
        <input placeholder="Your Email" name="Address" type="text" />
        <input placeholder="Your Email" name="City" type="text" />
        <input placeholder="Your Message" name="Mobile" type="text" />
        <input type="submit" />
        <input type="button" value="Delete" onClick={handleDelete} />
      </form>
    </div>
  );
}
