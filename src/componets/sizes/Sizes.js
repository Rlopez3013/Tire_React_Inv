import React from "react";
import { useState, useEffect } from "react";
import SizesTable from "../sizes/SizesTable";
import NewForm from "../forms/NewForm";
import * as utils from "./sizeFunctions";

const Size = () => {
  const [sizeList, setSizeList] = useState([]);
  //const [size] = useState("");

  useEffect(() => {
    let sizes = utils.getSizes.then((res) => {
      setSizeList(res.data);
    });
  }, []);

  return (
    <div className="App-brand">
      <div className="model">
        <SizesTable listSize={sizeList} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <NewForm />
    </div>
  );
};

export default Size;
