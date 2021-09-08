import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import * as utils from "../sizes/sizeFunctions";

const API_HOST = "http://localhost:5000";
const SIZES_API_URL = `${API_HOST}/api/sizes`;

const SizeContext = createContext({});

export const SizeProvider = ({ children }) => {
  const [listSize, setListSize] = useState([]);
  const [size, setSize] = useState(null);

  useEffect(() => {
    console.log("calling api");
    utils.getSizes.then((res) => {
      setListSize(res.data);
    });
  }, []);
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });
  const onEdit = ({ id, currentSize }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setSize(currentSize);
  };

  const onSave = ({ id, newSize }) => {
    utils.updateSize({ id, newSize });
  };
  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null,
    });
  };
  const onDelete = (id) => {
    Axios.delete(`${SIZES_API_URL}/${id}`);
  };

  return (
    <SizeContext.Provider
      value={{
        listSize,
        setListSize,
        size,
        setSize,
        onCancel,
        onEdit,
        onSave,
        inEditMode,
        setInEditMode,
        onDelete,
      }}
    >
      {children}
    </SizeContext.Provider>
  );
};
export default SizeContext;
