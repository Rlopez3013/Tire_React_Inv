import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import * as utils from "../models/modelFunction";

const API_URL = "http://localhost:5000";
const MODELS_API_URL = `${API_URL}/api/models`;

const MKR_HOST = "http://localhost:5000";
const MAKERS_API_URL = `${MKR_HOST}/api/makers`;

const ModelContext = createContext({});

export const ModelProvider = ({ children }) => {
  const [listModels, setListModels] = useState([]);
  const [listMakers, setListMakers] = useState([]);
  const [years, setYears] = useState([]);
  const [model, setModel] = useState(null);

  const loadModel = () => {
    utils.getAllModelList.then((res) => {
      setListModels(res.data);
    });
  };

  useEffect(() => {
    loadModel();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const onEdit = ({ id, currentModel, currentMaker, currentYear }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });

    setModel({
      model: currentModel,
      maker: currentMaker,
      year: currentYear,
    });
  };

  const onSave = ({ id, newModel }) => {
    utils.updateModel({ id, newModel });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
  };

  const onDelete = (model) => {
    Axios.delete(`${MODELS_API_URL}/api/${model}`);
  };

  return (
    <ModelContext.Provider
      value={{
        listModels,
        listMakers,
        setListMakers,
        years,
        setYears,
        setListModels,
        model,
        setModel,
        inEditMode,
        setInEditMode,
        onEdit,
        onSave,
        onCancel,
        onDelete,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
export default ModelContext;
