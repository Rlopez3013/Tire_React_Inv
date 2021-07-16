import React, { useState, useEffect } from "react";
import "./Models.css";
import * as utils from "./modelFunction";

const API_HOST = "http://localhost:5000";
const MODELS_API_URL = `${API_HOST}/api/models`;
//const MKR_HOST = "http://localhost:5000";
//const MAKERS_API_URL = `${MKR_HOST}/api/makers`;

const ModelsTable = (props) => {
  
  const [model, setModel] = useState({});
  

  useEffect(() => {
    //utils.getAllModelList();
  }, []);

  useEffect(() => {
    //utils.getAllMakeList();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const onEdit = ({ id, currentModel, currentMake, currentYear }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });

    setModel({
      model: currentModel,
      make: currentMake,
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

  return (
    <div className={"brand-body"}>
      <h1>Makers and Models Inventory</h1>
      <table className="brnd-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Maker</th>
            <th>Models</th>
            <th>Years</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.modelList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <select defaultValue={item.make_id}>
                      <option>Select Maker</option>
                      {props.makers.map((maker) => (
                        <option key={maker.id} value={maker.id}>
                          {maker.maker}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  item.maker
                )}
              </td>

              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <select defaultValue={item.model_id}>
                      <option>Select Model</option>
                      {props.modelList.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.model}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  item.model
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <select defaultValue={item.year_id}>
                      <option>Select Year</option>
                      {props.years.map((year) => (
                        <option key={year.id} value={year.id}>
                          {year.year}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  item.year
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() =>
                        onSave({ id: item.id, newModel: item.model })
                      }
                    >
                      Save
                    </button>

                    <button
                      className={"btn-secondary"}
                      style={{ marginLeft: 8 }}
                      onClick={() => onCancel()}
                    >
                      Cancel
                    </button>
                  </React.Fragment>
                ) : (
                  <button
                    className={"btn-edit"}
                    onClick={() =>
                      onEdit({
                        id: item.id,
                        currentModel: item.model,
                        currentMaker: item.maker,
                        currentYear: item.year,
                      })
                    }
                  >
                    Edit
                  </button>
                )}
                <button
                  className={"btn-delete"}
                  onClick={() => utils.onDelete({ id: item.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ModelsTable;
