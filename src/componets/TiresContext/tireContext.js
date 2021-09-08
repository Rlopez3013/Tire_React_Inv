import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import * as utils from "../tires/tireFunction";

const API_HOST = "http://localhost:5000";
const TIRES_API_URL = `${API_HOST}/api/tires`;

const TiresContext = createContext({});

export const TiresProvider = ({ children }) => {
  const [listTires, setListTires] = useState([]);
  const [listSize, setListSize] = useState([]);
  const [listSeason, setListSeason] = useState([]);
  const [tire, setTire] = useState(null);

  useEffect(() => {
    console.log("calling api");
    utils.getSizeList.then((res) => {
      setListSize(res.data);
    });
  }, []);
  useEffect(() => {
    console.log("calling api");
    utils.getSeasonList.then((res) => {
      setListSeason(res.data);
    });
  }, []);
  useEffect(() => {
    console.log("calling api");
    utils.getTireList.then((res) => {
      setListTires(res.data);
    });
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });
  const onEdit = ({ id, currentTire }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setTire(currentTire);
  };

  const onSave = ({ id, newTire }) => {
    utils.updateTires({ id, newTire });
  };
  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null,
    });
  };
  const onDelete = (id) => {
    console.log(id);
    Axios.delete(`${TIRES_API_URL}/${id}`);
  };

  return (
    <TiresContext.Provider
      value={{
        listTires,
        listSize,
        setListSize,
        setListSeason,
        listSeason,
        setListTires,
        tire,
        setTire,
        onCancel,
        onEdit,
        onSave,
        inEditMode,
        setInEditMode,
        onDelete,
      }}
    >
      {children}
    </TiresContext.Provider>
  );
};
export default TiresContext;
