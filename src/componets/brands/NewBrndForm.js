import React, { useState } from "react";
import Axios from "axios";

const NewBrndForm = () => {
  const [newBrand, setNewBrand] = useState({ brand: "" });

  const submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/brands", newBrand).then(
      (response) => {
        console.log(response);
      }
    );
  };
  return (
    <div>
      <form className="sub" onSubmit={submit}>
        <label htmlFor="new brand">New Brand</label>
        <input
          type="text"
          name="brand"
          onChange={(e) => setNewBrand({ ...newBrand, size: e.target.value })}
        />
        <button className={"btn-submit"} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewBrndForm;
