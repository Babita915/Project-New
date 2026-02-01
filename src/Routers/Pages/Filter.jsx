import React, { useState } from "react";
import { JsonFile } from "./JsonFile";
import { useNavigate } from "react-router-dom";


export default function Filter() {
  const cards = JsonFile();

  const [tempBrand, setTempBrand] = useState("all");
  const [tempSort, setTempSort] = useState("none");
  const [tempPrice, setTempPrice] = useState(672);
  const navigate = useNavigate();

   const applyFilter = () => {
    navigate("/products", {
      state: {
        brand: tempBrand,
        sort: tempSort,
        price: tempPrice,
      },
    });
  };


const handleReset = () => {
  setTempBrand("all");
  setTempSort("none");
  setTempPrice(672);
};
  return (
    <>
      <div className="container-filter mb-4">
        <div className="row">
          <div className="col-sm-6">
            <h6 className="fw-bold">Brand</h6>
            <select
              className="form-select w-50"
              value={tempBrand}
              onChange={(e) => setTempBrand(e.target.value)}
            >
              <option value="all">All Brand</option>
              <option value="Salt Maatal">Salt Maatal</option>
              <option value="Betsin Maatal">Betsin Maatal</option>
              <option value="Black Kibal">Black Kibal</option>
              <option value="Sexbomb">Sexbomb</option>
            </select>
          </div>

          <div className="col-sm-6">
            <h6 className="fw-bold">Sort By</h6>
            <select
              className="form-select w-40"
              value={tempSort}
              onChange={(e) => setTempSort(e.target.value)}
            >
              <option value="none">None</option>
              <option value="Name Ascending A - Z">A - Z</option>
              <option value="Name Descending Z - A">Z - A</option>
              <option value="Price Low - High">Low - High</option>
              <option value="Price High - Low">High - Low</option>
            </select>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <h6 className="fw-bold" style={{fontSize: "30px"}}>Price</h6>
            <p style={{marginLeft: "5%"}}>Up to ₹{tempPrice}</p>
          <input
  type="range"
  min={67}
  max={672}
  value={tempPrice}
  onChange={(e) => setTempPrice(Number(e.target.value))}
  style={{
    width: "100%",
    appearance: "none",
    WebkitAppearance: "none",
    height: "6px",
    borderRadius: "5px",
    outline: "none",
    background: `linear-gradient(
      to right,
      #0d6efd 0%,
      #0d6efd ${((tempPrice - 67) / (672 - 67)) * 100}%,
      #e0e0e0 ${((tempPrice - 67) / (672 - 67)) * 100}%,
      #e0e0e0 100%
    )`,
  }}
/>


          </div>
        </div>

        <button
          className="apply"
          onClick={applyFilter} >
          Apply
        </button>
        <button className="reset" onClick={handleReset}>Reset</button>
 
      </div>
    </>
  );
}
