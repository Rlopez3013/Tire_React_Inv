import Axios from "axios";
const API_HOST = "http://localhost:5000";
const TIRES_API_URL = `${API_HOST}/api/tires`;
const SIZES_API_URL = `${API_HOST}/api/sizes`;
const SEASONS_API_URL = `${API_HOST}/api/seasons`;

export const getTireList = Axios.get(TIRES_API_URL);

export const getSizeList = Axios.get(SIZES_API_URL);

export const getSeasonList = Axios.get(SEASONS_API_URL);

export const updateTires = ({ id, newTire }) => {
  Axios.put("TIRES_API_URL/updateTire", {
    id: id,
    name: newTire,
  }).then((response) => {
    alert("Updated");
  });
};
// export const onDelete = (id) => {
//   Axios.delete(`${TIRES_API_URL}/delete/${id}`);
// };
