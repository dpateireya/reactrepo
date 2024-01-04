import React from "react";

const CovidStatelist = (props) => {
  return (
    <>
      <tr>
        <th scope="row">{props.sno}</th>
        <td>{props.loc}</td>
        <td>{props.confirmedCasesIndian}</td>
        <td>{props.discharged}</td>
        <td>{props.deaths}</td>
        <td>{props.totalConfirmed}</td>
      </tr>
    </>
  );
};

export default CovidStatelist;
