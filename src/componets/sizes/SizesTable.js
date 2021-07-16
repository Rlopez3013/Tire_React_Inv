import React, { useEffect, useState } from "react";
import * as utils from "./sizeFunctions";



const SizesTable = (props) => {
  
  const [size, setSize] = useState(null);

  useEffect(() => {
    console.log("calling api");
    //utils.getSize();
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

  return (
    <div className="brand-body">
      <h1>Sizes Inventory</h1>
      <table className="brnd-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sizes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.listSize.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <select defaultValue={item.size_id}>
                    <option>Select size</option>
                    {props.sizeList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.size}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.size
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() =>
                        onSave({
                          id: item.id,
                          newSize: size,
                        })
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
                        currentSize: item.size,
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

export default SizesTable;
