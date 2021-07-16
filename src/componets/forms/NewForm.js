import React, { useState } from "react";
import Axios from "axios";

const NewSizeForm = () => {
  const [newSize, setNewSize] = useState({ size: "" });

  const submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/sizes", newSize).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <form className="sub" onSubmit={submit}>
        <label htmlFor="new size">New Size:</label>
        <input
          type="text"
          name="size"
          onChange={(e) => setNewSize({ ...newSize, size: e.target.value })}
        />
        <button className={"btn-submit"} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewSizeForm;
