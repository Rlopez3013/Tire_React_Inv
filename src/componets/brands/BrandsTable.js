import React, { useContext } from "react";
import "./Brand.css";

import BrandContext from "../context/BrandContext";

const API_HOST = "http://localhost:5000";
const BRANDS_API_URL = `${API_HOST}/api/brands`;

const BrandsTable = () => {
  const {
    brandList,
    brand,
    setBrand,
    onDelete,
    inEditMode,
    setInEditMode,
    onEdit,
    onSave,
    onCancel,
  } = useContext(BrandContext);
  // const [brand, setBrand] = useState(null);

  // useEffect(() => {
  //   console.log("call api");
  //   //utils.getAllBrand();
  // }, []);

  // const onDelete = (id) => {
  //   console.log(id);
  //   Axios.delete(`${BRANDS_API_URL}/${id}`).then((res) => {});
  // };

  // const [inEditMode, setInEditMode] = useState({
  //   status: true,
  //   rowKey: null,
  // });

  // const onEdit = ({ id, currentBrand }) => {
  //   setInEditMode({
  //     status: true,
  //     rowKey: id,
  //   });
  //   setBrand(currentBrand);
  // };

  // const onSave = ({ id, newBrand }) => {
  //   utils.updateBrand({ id, newBrand });
  // };

  // const onCancel = () => {
  //   setInEditMode({
  //     status: false,
  //     rowKey: null,
  //   });
  // };

  return (
    <div className="brand-body">
      <h1>Brand Inventory</h1>
      <table className="brnd-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brands</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brandList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <select defaultValue={item.brand_id}>
                    <option>Select Brand</option>
                    {brandList.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {item.brand}
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
                      onClick={() =>
                        onSave({ id: item.id, newBrand: item.brand })
                      }
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
                  onClick={() => onDelete(item.id)}
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
