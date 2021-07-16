import { useState, useEffect } from "react";
import React from "react";
import TiresTable from "./TiresTable";
import NewTireForm from "../tires/NewTireForm";
import * as utils from "./tireFunction";

const Tires = () => {
  // const [tire, setTire] = useState("");
  const [tireList, setTireList] = useState([]);

  useEffect(() => {
    let tires = utils.getTireList.then((res) => {
      setTireList(res.data);
    });
  });

  return (
    <div className="App">
      <div className="info">
        <TiresTable listTires={tireList} />
        <br></br>
        <br></br>
        <br></br>
        <NewTireForm />
      </div>
    </div>
  );
};

export default Tires;
