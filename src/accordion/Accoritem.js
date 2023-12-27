import { useState } from "react";

function Accoritem(props) {
  const [Isshow, setIsshow] = useState(false);
  function showData() {
    setIsshow(!Isshow);
  }
  return (
    <>
      <div className="accor_list_head_style">
        <button onClick={showData} className="accor_button_style">
          {Isshow ? "-" : "+"}
        </button>
        <span className="accor_label_style">{props.question}</span>
      </div>
      {Isshow && (
        <div className="accor_list_parag_style">
          <p className="accor_label_style">{props.answer}</p>
        </div>
      )}
    </>
  );
}

export default Accoritem;
