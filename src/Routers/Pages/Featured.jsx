import React from "react";
import { JsonFile } from "./JsonFile";
import Cards from "./Card";

export default function Featured() {
  const cards = JsonFile();

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6">
            <h1>Featured <br /> Products</h1>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img
              src="/assets/a3.png"
              alt="Featured"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </div>
        </div>
      </div>

      
      <div className="container my-5">
        <div className="row g-4">
          {cards.map((item) =>
            item.category === "feature" ? (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Cards data={item} />
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
