import React, { useEffect, useState } from "react";
import "./Brand.css";
import * as utils from "./brandFunctions";


const BrandsTable = (props) => {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    console.log("call api");
    //utils.getAllBrand();
  }, []);

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
    <div className="brand-body">
      <h1>Brand Inventory</h1>
      <table className="brnd-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.listBrands.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <select defaultValue={item.brand_id}>
                    <option>Select Brand</option>
                    {props.listBrands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.brand}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.brand
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <React.Fragment>
                    <button
                      className={"btn-success"}
                      onClick={() => onSave({ id: item.id, newBrand: brand })}
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
                      onEdit({ id: item.id, currentBrand: item.brand })
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
export default BrandsTable;
