import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Modify = () => {
  const [Apidata, setApidata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, [Apidata]);

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_NSET_API}/${id}`).then((res) => {
      setApidata(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_NSET_API}/${id}`, Apidata)
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
      <div className="container bg-light w-25 p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name :</label>
            <input
              type="text"
              className="form-control"
              value={Apidata.name}
              onChange={(e) => setApidata({ ...Apidata, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-Mail :</label>
            <input
              type="email"
              className="form-control"
              value={Apidata.email}
              onChange={(e) =>
                setApidata({ ...Apidata, email: e.target.value })
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

export default Modify;
