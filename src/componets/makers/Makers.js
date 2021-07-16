import React from "react";
import { useState, useEffect } from "react";
import MakersTable from "../makers/MakersTable";
import NewMkrForm from "../makers/NewMkrForm";
import * as utils from "./makerFunctions";

const Maker = () => {
  const [makerList, setMakerList] = useState([]);

  useEffect(() => {
    let makers = utils.getAllMaker.then(res => {
      //console.log('makers', res.data)
      setMakerList(res.data);
    });
    
  }, []);

  return (
    <div className="model-table">
      <div className="mdls-table">
        <MakersTable listMakers={makerList} />
        <br></br>
        <br></br>
        <br></br>
        <NewMkrForm />
      </div>
    </div>
  );
};
export default Maker;
