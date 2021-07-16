import Axios from "axios";

const API_HOST = "http://localhost:5000";
const SIZES_API_URL = `${API_HOST}/api/sizes`;

export const addSize = (size) => {
  Axios.post("http://localhost:5000/api/sizes", {
    size: size,
  }).then(() => {
    console.log("Success");
  });
};

export const getSizes = Axios.get(SIZES_API_URL);

export const updateSize = (id, size) => {
  Axios.put("SIZES_API_URL/updateSize", {
    size: size,
    id: id,
  }).then((response) => {
    alert("update");
  });
};

export const onDelete = (size) => {
  Axios.delete(`http://localhost:5000/api/delete/${size}`);
};
