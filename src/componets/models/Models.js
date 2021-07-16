import { useState, useEffect } from "react";
import React from "react";
import ModelsTable from "./ModelsTable";
import NewModelForm from "../models/NewModelForm";
import * as utils from "./modelFunction";

const Models = () => {
  const [modelList, setModelList] = useState([]);

  useEffect(() => {
    let models = utils.getAllModelList.then((res) => {
      setModelList(res.data);
    });
  });

  return (
    <div className="App-brand">
      <div className="model">
        <br></br>
        <br></br>
      </div>
      <ModelsTable modelList={modelList} />
      <NewModelForm />
      <br></br>
      <br></br>
      <div className="models"></div>
    </div>
  );
};

export default Models;
