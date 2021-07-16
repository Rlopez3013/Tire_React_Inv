import React, { useEffect, useState } from "react";
import "./Makers.css";
import * as utils from "./makerFunctions";

const API_URL = "http://localhost:5000";
const MAKERS_API_URL = `${API_URL}/api/makers`;

const MakersTable = (props) => {
  const [maker, setMaker] = useState(null);

  useEffect(() => {
    console.log("calling api");
    //utils.getAllMaker();
  }, []);

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
    <div className="table">
      <h1>Maker Inventory</h1>
      <table className="mkrs-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Makers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.listMakers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <select defaultValue={item.maker_id}>
                    <option>Select Maker</option>
                    {props.listmakers.map((maker) => (
                      <option key={maker.id} value={maker.id}>
                        {maker.maker}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.maker
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() => onSave({ id: item.id, newMaker: maker })}
                    >
                      Save
                    </button>

                    <button
                      className={"btn-secondary"}
                      style={{
                        marginLeft: 8,
                      }}
                      onClick={() => onCancel()}
                    >
                      Cancel
                    </button>
                  </React.Fragment>
                ) : (
                  <button
                    className={"btn-edit"}
                    onClick={() =>
                      onEdit({ id: item.id, currentMaker: item.maker })
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

export default MakersTable;
// add onChange to makers and the add the new model to the maker. In the select part on ModelsTable.
