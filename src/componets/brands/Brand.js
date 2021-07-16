import React from "react";
import { useState, useEffect } from "react";
import BrandsTable from "./BrandsTable";
import NewBrndForm from "../brands/NewBrndForm";
import * as utils from "./brandFunctions";

const Brand = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    let brands = utils.getAllBrand.then((res) => {
      setBrandList(res.data);
    });
  }, []);

  return (
    <div className="App-brand">
      <div className="model">
        <br></br>
        <br></br>
      </div>
      <BrandsTable listBrands={brandList} />
      <br></br>
      <br></br>
      <NewBrndForm />
      <br></br>
      <br></br>
      <div className="brands"></div>
    </div>
  );
};
export default Brand;
