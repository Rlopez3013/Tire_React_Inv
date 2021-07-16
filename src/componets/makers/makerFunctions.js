import Axios from "axios";
const API_HOST = "http://localhost:5000";
const MAKERS_API_URL = `${API_HOST}/api/makers`;

export const getAllMaker = Axios.get(MAKERS_API_URL);

export const updateMaker = (id, newMaker) => {
  Axios.put("MAKERS_API_URL/updateMaker", {
    id: id,
    maker: newMaker,
  }).then((response) => {
    alert("updated");
  });
};




export const onDelete = (maker) => {
  Axios.delete(`http://localhost:5000/api/delete/${maker}`);
};
