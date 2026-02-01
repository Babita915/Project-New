import React from "react";

export default function Cards({ data }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={data.cardImage}
        className="card-img-top img-fluid"
        alt={data.cardHeading}
        style={{ maxHeight: "200px", objectFit: "contain", background: "#f5f5f5" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{data.cardHeading}</h6>
        <p className="card-text text-muted small">{data.cardParagraph}</p>
      </div>
    </div>
  );
}
