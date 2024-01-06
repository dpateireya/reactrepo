import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [inputData, setInputData] = useState({ name: "", email: "" });

  const submitHandle = (e) => {
    e.preventDefault();
    axios.post(" http://localhost:3030/users", inputData).then(() => {
      alert("saved");
      setInputData({ name: "", email: "" });
    });
  };

  return (
    <>
      <div class="container bg-light w-25 p-5">
        <form onSubmit={submitHandle}>
          <div class="mb-3">
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
          <div class="mb-3">
            <label className="form-label">E-Mail :</label>
            <input
              type="email"
              class="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
