import Axios from "axios";
const API_HOST = "http://localhost:5000";
const BRANDS_API_URL = `${API_HOST}/api/brands`;

export const getAllBrand = Axios.get(BRANDS_API_URL);

export const updateBrand = ({ id, newBrand }) => {
  Axios.put("${BRANDS_API_URL}/updateBrand", {
    id: id,
    brand: newBrand,
  }).then((response) => {
    alert("updated");
  });
};

// export const onDelete = (id) => {
//   Axios.delete(`${BRANDS_API_URL}/${id}`)
//};
