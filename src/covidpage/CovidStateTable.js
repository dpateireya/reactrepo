import React from "react";
import CovidStatelist from "./CovidStatelist";

const CovidStateTable = (props) => {
  return (
    <>
      <div>
        <div>
          <p className="h1 text-center">
            Covid 19 State-wise Corona Virus Tracker
          </p>
        </div>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => {
              return (
                <>
                  <CovidStatelist
                    index={index}
                    key={index}
                    id={index}
                    sno={index + 1}
                    loc={item.loc}
                    confirmedCasesIndian={item.confirmedCasesIndian}
                    discharged={item.discharged}
                    deaths={item.deaths}
                    totalConfirmed={item.totalConfirmed}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CovidStateTable;
