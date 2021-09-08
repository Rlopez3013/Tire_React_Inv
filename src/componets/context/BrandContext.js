import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import * as utils from "../brands/brandFunctions";
import About from "../../About";

const API_HOST = "http://localhost:5000";
const BRANDS_API_URL = `${API_HOST}/api/brands`;

const BrandContext = createContext({});

export const BrandProvider = ({ children }) => {
  const [brandList, setBrandList] = useState([]);
  const [brand, setBrand] = useState(null);

  const loadBrands = () => {
    utils.getAllBrand.then((res) => {
      setBrandList(res.data);
    });
  };

  useEffect(() => {
    loadBrands();
  }, []);

  const onDelete = (id) => {
    console.log(id);
    Axios.delete(`${BRANDS_API_URL}/${id}`).then((res) => {
      loadBrands();
    });
  };

  const [inEditMode, setInEditMode] = useState({
    status: true,
    rowKey: null,
  });

  const onEdit = ({ id, currentBrand }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setBrand(currentBrand);
  };

  const onSave = ({ id, newBrand }) => {
    utils.updateBrand({ id, newBrand });
  };

  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null,
    });
  };

  return (
    <BrandContext.Provider
      value={{
        About,
        brandList,
        setBrandList,
        brand,
        setBrand,
        inEditMode,
        setInEditMode,
        onEdit,
        onDelete,
        onSave,
        onCancel,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};
export default BrandContext;

// context squeleton for context api(starting point)
