import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const House = () => {
  const [Apidata, setApidata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(process.env.REACT_APP_NSET_API)
      .then((res) => {
        setApidata(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setApidata({ name: "", email: "" });
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      axios
        .delete(`${process.env.REACT_APP_NSET_API}/${id}`)
        .then(() => {
          alert("delete");
          getData();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="container-sm bg-light w-75 text-center">
        <h2>CRUD Operation with axios and NEST API-Server </h2>
        <Link className="btn btn-success" to="/add">
          Create +
        </Link>

        <table className="table table-success table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Apidata &&
              Apidata.map((item, index) => {
                return (
                  <>
                    <tr id={index} key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link
                          to={"/modify/" + item.id}
                          className="btn btn-warning me-1"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-danger me-1"
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          Delete
                        </button>
                        <button className="btn btn-info me-1">Read</button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default House;
