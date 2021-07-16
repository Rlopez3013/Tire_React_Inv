import Axios from "axios";
const API_HOST = "http://localhost:5000";
const TIRES_API_URL = `${API_HOST}/api/tires`;
const SIZES_API_URL = `${API_HOST}/api/sizes`;
const SEASONS_API_URL = `${API_HOST}/api/seasons`;

export const getTireList = Axios.get(TIRES_API_URL);

//export const getTireList = () => {
//   Axios.get("TIRES_API_URL/api/tires").then(() => {
//     console.log("success");
//   });
// };

export const getSizeList = Axios.get(SIZES_API_URL);

export const getSeasonList = Axios.get(SEASONS_API_URL);

// useEffect(() => {
//   getTireList();
//   getSizeList();
//   getSeasonList();
// }, []);

export const updateTire = ({ id, newTire }) => {
  Axios.put("TIRES_API_URL/api/update", {
    id: id,
    name: newTire,
  }).then((response) => {
    // onCancel();
    // setTire(null);
    //fetch update data
    //getTireList();

    alert("Success");
  });
};
export const onDelete = (id) => {
  Axios.delete(`http://localhost:5000/api/delete/${id}`);
};
