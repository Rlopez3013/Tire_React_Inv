import React from "react";
//import { useState, useEffect } from "react";
import SizesTable from "../sizes/SizesTable";
import NewForm from "../forms/NewForm";
//import * as utils from "./sizeFunctions";

const Size = () => {
  // const [listSize, setListSize] = useState([]);

  // useEffect(() => {
  //   let sizes = utils.getSizes.then((res) => {
  //     setListSize(res.data);
  //   });
  // }, []);

  return (
    <div className="App-brand">
      <div className="model">
        <SizesTable />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <NewForm />
    </div>
  );
};

export default Size;
