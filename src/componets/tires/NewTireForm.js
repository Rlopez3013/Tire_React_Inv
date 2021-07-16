import React, { useState, useEffect } from "react";
import Axios from "axios";

function NewTireForm() {
  const [brandList, setBrandList] = useState([]);
  const [brand, setBrand] = useState(null);
  const [seasonList, setSeasonList] = useState([]);
  const [season, setSeason] = useState(null);
  const [newName, setNewName] = useState(null);
  const [sizeList, setSizeList] = useState([]);
  const [size, setSize] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/tires", {
      name: newName,
      size: size,
      brand: brand,
      season: season,
    }).then((response) => {
      console.log(response);
    });
  };

  const onBrandChange = (e) => {
    setBrand(e.target.value);
  };
  const onSeasonChange = (e) => {
    setSeason(e.target.value);
  };

  useEffect(function () {
    Axios.get("http://localhost:5000/api/seasons")
      .then((response) => setSeasonList(response.data))
      .then((error) => console.log(error));
  }, []);
  useEffect(function () {
    Axios.get("http://localhost:5000/api/brands")
      .then((response) => setBrandList(response.data))
      .then((error) => console.log(error));
  }, []);
  useEffect(function () {
    Axios.get("http://localhost:5000/api/sizes")
      .then((response) => setSizeList(response.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div>
      <form className="select" onSubmit={submit}>
        <label className="name" htmlFor="newName">
          New Name:
        </label>
        <input
          type="text"
          id="newName"
          name="newName"
          onChange={(e) => setNewName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="newSize">New Size:</label>
        <select
          name="size"
          id="size"
          placeholder="choose a size"
          className="dropdown"
          onChange={(e) => setSize(e.target.value)}
        >
          <option>Select Size</option>
          {sizeList.map((size) => (
            <option key={size.id} value={size.id}>
              {size.size}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <label>Choose Season:</label>
        <select
          name="season"
          id="season"
          placeholder="choose a season"
          className="dropdown"
          onChange={onSeasonChange}
        >
          <option>Select Season</option>
          {seasonList.map((season) => (
            <option key={season.id} value={season.id}>
              {season.season}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <div>
          <label>Select Brand:</label>
          <select
            name="brand"
            id="brand"
            placeholder="choose brand"
            className="dropdown"
            onChange={onBrandChange}
          >
            <option>Select Brand</option>
            {brandList.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.brand}
              </option>
            ))}
          </select>
        </div>
        <br></br>
        <br></br>
        <button className={"btn-submit"} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default NewTireForm;
