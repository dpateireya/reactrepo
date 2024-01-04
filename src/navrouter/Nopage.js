import React, { useEffect, useState } from "react";

const Nopage = () => {
  let [Show, setShow] = useState(0);
  let [Message, setMessage] = useState("visually-hidden");

  useEffect(() => {
    document.title = `Clicked hit - ${Show}`;
    setMessage("");
    setTimeout(() => {
      setMessage("visually-hidden");
    }, 3000);
  }, [Show]);

  return (
    <>
      <button
        id="btnclick"
        onClick={() => {
          setShow(Show + 1);
        }}
        type="button"
        className="btn btn-warning"
      >
        Clicked- {Show}
      </button>
      <div className={`alert alert-warning ${Message}`} role="alert">
        {`The Count Value is ${Show}`}
      </div>
    </>
  );
};

export default Nopage;
