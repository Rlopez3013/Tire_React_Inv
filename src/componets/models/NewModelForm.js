import React, { useState, useEffect } from "react";
import Axios from "axios";

function NewModelForm() {
  const [makersList, setMakersList] = useState([]);
  const [maker, setMaker] = useState(null);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState({});
  const [model, setModel] = useState(null);
  

  const addModel = () => {
    Axios.post("http://localhost:5000/api/models", {
      model: model,
      year: year,
      maker: maker,
    }).then(() => {
      console.log("success");
    });
  };
  const onMakerChange = (e) => {
    //alert(e.target.value);
    setMaker(e.target.value);
  };

  const onYearChange = (e) => {
    setYear(e.target.value);
  };
  const onModelChange = (e) => {
    setModel(e.target.value);
  };

  useEffect(function () {
    Axios.get("http://localhost:5000/api/makers")
      .then((response) => setMakersList(response.data))
      .then((error) => console.log(error));
  }, []);
  useEffect(function () {
    Axios.get("http://localhost:5000/api/models")
      .then((response) => setYears(response.data))
      .then((error) => console.log(error));
  }, []);

  

  return (
    <div className="btns-form">
      <form className="model-form">
        <div className="year">
          <label htmlFor="maker">Choose a Maker:</label>
          <select
            className={"maker-select"}
            name="maker"
            id="maker"
            placeholder="Choose a maker"
            onChange={onMakerChange}
          >
            <option>Select Maker</option>
            {makersList.map((maker) => (
              <option key={maker.id} value={maker.id}>
                {maker.maker}
              </option>
            ))}
          </select>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="year">Choose a Year:</label>
          <select
            className="year-select"
            name="year"
            id="year"
            placeholder="Choose year"
            onChange={onYearChange}
            // className="dropdown"
          >
            <option>Select Year</option>
            {years.map((year) => (
              <option key={year.id} value={year.id}>
                {year.year}
              </option>
            ))}
          </select>
          <div>
            <br></br>
            <br></br>
            <label htmlFor="newModel">New Model:</label>
            <input
              className="year-select"
              type="text"
              id="newModel"
              name="newModel"
              onChange={onModelChange}
            />
            <br></br>
            <br></br>
            <input
              className={"btn-sub"}
              type="submit"
              value="submit"
              onClick={addModel}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default NewModelForm;
