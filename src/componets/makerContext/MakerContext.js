import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import * as utils from "../makers/makerFunctions";

const API_URL = "http://localhost:5000";
const MAKERS_API_URL = `${API_URL}/api/makers`;

const MakerContext = createContext({});

export const MakerProvider = ({ children }) => {
  const [listMakers, setListMakers] = useState([]);
  const [maker, setMaker] = useState(null);

  const loadMakers = () => {
    utils.getAllMaker.then((res) => {
      setListMakers(res.data);
    });
  };

  useEffect(() => {
    loadMakers();
  }, []);

  useEffect(() => {
    console.log("calling api");
    //loadMakers();
  }, []);

  const onDelete = (id) => {
    console.log(id);
    Axios.delete(`${MAKERS_API_URL}/${id}`);
  };

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const onEdit = ({ id, currentMaker }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setMaker(currentMaker);
  };

  const onSave = ({ id, newMaker }) => {
    utils.updateMaker({ id, newMaker });
  };
  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null,
    });
  };

  return (
    <MakerContext.Provider
      value={{
        listMakers,
        setListMakers,
        maker,
        setMaker,
        inEditMode,
        setInEditMode,
        onEdit,
        onDelete,
        onSave,
        onCancel,
      }}
    >
      {children}
    </MakerContext.Provider>
  );
};
export default MakerContext;
