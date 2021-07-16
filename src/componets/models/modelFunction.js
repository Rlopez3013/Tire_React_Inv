import Axios from "axios";
const API_HOST = "http://localhost:5000";
const MODELS_API_URL = `${API_HOST}/api/models`;

const MKR_HOST = "http://localhost:5000";
const MAKERS_API_URL = `${MKR_HOST}/api/makers`;

export const getAllModelList = Axios.get(MODELS_API_URL);

export const getAllMakeList = Axios.get(MAKERS_API_URL);

export const updateModel = (id, newModel) => {
  Axios.put("MODELS_API_URL/updateModel", {
    id: id,
    model: newModel,
  }).then((response) => {
    alert("updated");
  });
};

export const onDelete = (model) => {
  Axios.delete(`http://localhost:5000/api/delete/${model}`);
};
