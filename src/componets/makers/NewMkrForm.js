import React, { useState } from "react";
import Axios from "axios";

const NewMkrForm = () => {
  const [newMaker, setNewMaker] = useState({ size: "" });

  const submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/makers", newMaker).then(
      (response) => {
        console.log(response);
      }
    );
  };
  return (
    <div>
      <form className="sub" onSubmit={submit}>
        <label htmlFor="new maker">New Maker:</label>
        <input
          type="text"
          name="maker"
          onChange={(e) => setNewMaker({ ...newMaker, maker: e.target.value })}
        />
        <button className={"btn-submit"} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewMkrForm;
