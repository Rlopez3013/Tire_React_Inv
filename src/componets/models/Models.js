//import { useState, useEffect } from "react";
import ModelsTable from "./ModelsTable";
import NewModelForm from "../models/NewModelForm";
//import * as utils from "./modelFunction";

const Models = () => {
  //const [listModel, setListModel] = useState([]);
  //const [makerList, setMakerList] = useState([]);
  //const [years, setYears] = useState([]);
  // useEffect(() => {
  //   let models = utils.getAllModelList.then((res) => {
  //     setListModel(res.data);
  //   });
  // }, []);

  return (
    <div className="App-brand">
      <div className="model">
        <br></br>
        <br></br>
      </div>
      <ModelsTable />
      <NewModelForm />
      <br></br>
      <br></br>
      <div className="models"></div>
    </div>
  );
};

export default Models;
