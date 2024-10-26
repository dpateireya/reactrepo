import axios from "axios";
import { useState } from "react";

const Add = () => {
  const [inputData, setInputData] = useState({ id: 0, name: "", email: "" });

  const submitHandle = (e) => {
    e.preventDefault();

    axios.post(process.env.REACT_APP_NSET_API, inputData).then(() => {
      alert("saved");
      setInputData({ id: 0, name: "", email: "" });
    });
  };

  return (
    <>
      <div className="container bg-light w-25 p-5">
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <label className="form-label">ID :</label>
            <input
              type="text"
              className="form-control"
              value={+inputData.id}
              onChange={(e) =>
                setInputData({ ...inputData, id: +e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name :</label>
            <input
              type="text"
              className="form-control"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-Mail :</label>
            <input
              type="email"
              className="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
