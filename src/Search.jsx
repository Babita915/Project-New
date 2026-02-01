import React from "react";
import { useSearchParams } from "react-router-dom";
import { JsonFile } from "./Routers/Pages/JsonFile";



export default function Search() {
  const cards = JsonFile();
  const [params] = useSearchParams();
  const query = params.get("query") || "";

  const result = cards.filter(item =>
    item.cardHeading.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h3 className="mb-3">Results for "{query}"</h3>

      <h5 className="text-muted text-center mb-4">
        {result.length === 0
          ? "No items found"
          : `${result.length} product${result.length > 1 ? "s" : ""} found`}
      </h5>

      <div className="row g-4">
        {result.map(item => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.cardImage}
                className="card-img-top img-fluid"
                alt={item.cardHeading}
                style={{ background: "#f8f9fa", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.cardHeading}</h5>
                <p className="card-text text-muted">{item.cardParagraph}</p>
                <p className="mt-auto fw-bold">₹{item.price}</p>
                <button className="btn btn-dark mt-2">Add To Basket</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
