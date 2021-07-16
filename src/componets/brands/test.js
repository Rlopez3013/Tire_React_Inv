import React, { useEffect, useState } from "react";

// import * as utils from "./brandFunctions";

const API_HOST = "http://localhost:5000";
const BRAND_API_URL = `${API_HOST}/api/brands`;

function BrandsTable() {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);

  const getAllBrand = () => {
    fetch(`${BRAND_API_URL}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("Print response");
        console.log(json);

        setBrands(json);
      });
  };
  //Calling the function on component mount
  useEffect(() => {
    console.log("callin api");
    getAllBrand();
  }, []);

  const updateBrand = ({ id, newBrand }) => {
    fetch(`${BRAND_API_URL}/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        brand: newBrand,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        onCancel();
        setBrand(null);

        getAllBrand();
      });

    const [inEditMode, setInEditMode] = useState({
      status: false,
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
      updateBrand({ id, newBrand });
    };

    const onCancel = () => {
      // reset the inEditMode state value
      setInEditMode({
        status: false,
        rowKey: null,
      });
      // reset the unit price state value
    };

    const onDelete = ({ id }) => {
      fetch(`${BRAND_API_URL}/delete/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // fetch the update data
          getAllBrand();
        });
    };

    return (
      <div className="container">
        <h1>Brand Inventory</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Brands</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {/* <td>{item.brand}</td> */}
                <td>
                  {inEditMode.status && inEditMode.rowKey === item.id ? (
                    <select defaultValue={item.brand_id}>
                      <option>Select Brand</option>
                      {brands.map((brand) => (
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
                     <Actions
                      actionName="Save"
                      actionType="save"
                      actionItem={item}
                    /> 

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
                      className={"btn-primary"}
                      onClick={() =>
                        onEdit({ id: item.id, currentBrand: item.brand })
                      }
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className={"btn-primary"}
                    onClick={() => onDelete({ id: item.id })}
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
}
export default BrandsTable;