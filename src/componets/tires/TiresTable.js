import React, { useState, useEffect } from "react";
//import Axios from "axios";
import "./Tires.css";
import * as utils from "./tireFunction";

const TiresTable = (props) => {

  const [tire, setTire] = useState({});
  

  useEffect(() => {
    
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const onEdit = ({ id, currentTire, currentSize, currentSeason }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });

    setTire({
      tire: currentTire,
      size: currentSize,
      season: currentSeason,
    });
  };

  const onSave = ({ id, newTire }) => {
    utils.updateTire({ id, newTire });
  };

  const onCancel = () => {
    setInEditMode({
      status: false,
      rowkey: null,
    });
  };

  return (
    <div className="brand-body">
      <h1>Tire Inventory</h1>
      <table className="mkrs-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Names</th>
            <th>Sizes</th>
            <th>Season</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.listTires.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <input
                      value={tire.tire}
                      onChange={(Event) => {
                        setTire((prevTire) => {
                          return {
                            ...prevTire,
                            tire: Event.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                ) : (
                  item.name
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <select defaultValue={item.sizeId}>
                      {props.sizeList.map((size) => (
                        <option key={size.id} value={size.id}>
                          {size.size}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  item.size
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <select defaultValue={item.seasonId}>
                      <option value={item.season}>Select Season</option>
                      {props.seasonList.map((season) => (
                        <option key={season.id} value={season.id}>
                          {season.season}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  item.season
                )}
              </td>

              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() => {
                        console.log(tire);
                        onSave({ id: item.id, newTire: tire.tire });
                      }}
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
                        currentTire: item.name,
                        currentSize: item.size,
                        currentSeason: item.season,
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

export default TiresTable;
