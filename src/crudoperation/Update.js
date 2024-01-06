import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const [Apidata, setApidata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get(`http://localhost:3030/users/${id}`).then((res) => {
      setApidata(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3030/users/${id}`, Apidata)
      .then(() => {
        alert("update");
        setApidata({ name: "", email: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="container bg-light w-25 p-5">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label className="form-label">Name :</label>
            <input
              type="text"
              className="form-control"
              value={Apidata.name}
              onChange={(e) => setApidata({ ...Apidata, name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label className="form-label">E-Mail :</label>
            <input
              type="email"
              class="form-control"
              value={Apidata.email}
              onChange={(e) =>
                setApidata({ ...Apidata, email: e.target.value })
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

export default Update;
