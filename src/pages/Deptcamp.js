import React from "react";
import "../App.css";
import FormWithYup from "../forms/FormWithYup";
import "./Deptcamp.css"

const Deptcamp = () => {
  return (
    <div className="Deptcamp main-body" >
      {/* <h1>Dept camp</h1> */}
       <FormWithYup />
    </div>
  );
};

export { Deptcamp }
