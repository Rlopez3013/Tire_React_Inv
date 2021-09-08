import React, { useContext } from "react";
import "./Tires.css";

import TireContext from "../TiresContext/tireContext";

const TiresTable = () => {
  //const [tire, setTire] = useState(null);
  const {
    listTires,
    listSize,
    listSeason,
    tire,
    setTire,
    onDelete,
    onEdit,
    onSave,
    onCancel,
    inEditMode,
    setInEditMode,
  } = useContext(TireContext);

  // useEffect(() => {
  //   console.log("call api");
  // }, []);

  // const [inEditMode, setInEditMode] = useState({
  //   status: false,
  //   rowKey: null,
  // });

  // const onEdit = ({ id, currentTire, currentSize, currentSeason }) => {
  //   setInEditMode({
  //     status: true,
  //     rowKey: id,
  //   });

  //   setTire({
  //     tire: currentTire,
  //     size: currentSize,
  //     season: currentSeason,
  //   });
  // };

  // const onSave = ({ id, newTire }) => {
  //   utils.updateTire({ id, newTire });
  // };

  // const onCancel = () => {
  //   setInEditMode({
  //     status: false,
  //     rowkey: null,
  //   });
  // };

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
          {listTires.map((item) => (
            <tr key={item.tire_id}>
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
                  <select defaultValue={item.size_id}>
                    {listSize.map((size) => (
                      <option key={item.size_id} value={item.id}>
                        {size.size}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.size
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === item.id ? (
                  <div>
                    <select defaultValue={item.season_id}>
                      <option value={item.season}>Select Season</option>
                      {listSeason.map((season) => (
                        <option key={season.season_id} value={season.id}>
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
                        onSave({ id: item.id, newTire: item.tire });
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

export default TiresTable;
