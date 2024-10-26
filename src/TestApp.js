import React from "react";
import env from "react-dotenv";

const TestApp = () => {
  return <div>{process.env.REACT_APP_SOME_NAME}</div>;
};

export default TestApp;
