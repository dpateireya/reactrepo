import Heading from "../adsbox/heading/Heading";
import "./Incredecre.css";
import { useState } from "react";
function Incredecre() {
  const [val, setVal] = useState(0);
  function addItemsub() {
    setVal((val) => {
      return val + 1;
    });
  }
  function subItemsub() {
    setVal((val) => {
      if (val > 0) {
        return val - 1;
      } else {
        alert("Sorry, Zero limit reached.");
        return 0;
      }
    });
  }
  return (
    <>
      <div className="incre_form_style">
        <div>
          <Heading head="Increment/Decrement" />
        </div>
        <div className="incre_form_style">
          <div>
            <label className="incre_label_style">{val}</label>
          </div>
          <div>
            <button className="incre_button_style" onClick={addItemsub}>
              +
            </button>
            <button className="incre_button_style" onClick={subItemsub}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incredecre;
