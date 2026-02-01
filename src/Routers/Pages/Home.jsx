import React from "react";
import { useNavigate } from "react-router-dom";
import { JsonFile } from "./JsonFile";

import Cards from "./Card";

export default function Home() {
  const cards = JsonFile();
  const navigate = useNavigate();

  return (
    <>
   
      <div className="container py-5" style={{background: "rgb(250, 250, 250)"}}>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1>
              <span>See</span> everything <br /> with <span>Clarity</span>
            </h1>
            <p className="text-muted mt-3">
              Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.
            </p>
            <button className="btn btn-dark mt-3" onClick={() => navigate("/shop")}>
              Shop Now
            </button>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img
              src="/assets/a1.png"
              className="img-fluid"
              alt="hero"
            />
          </div>
        </div>
      </div>

      
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
          <h2>Featured Products</h2>
          <button className="btn btn-link p-0 text-dark" onClick={() => navigate("/featured")}>
            See All
          </button>
        </div>

        <div className="row g-4">
  {cards.map((item, index) =>
    item.category === "recommended" ? (
      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Cards data={item} />
      </div>
    ) : null
  )}
</div>
</div>

   
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
          <h2>Recommended Products</h2>
          <button className="btn btn-link p-0 text-dark" onClick={() => navigate("/recommended")}>
            See All
          </button>
        </div>

        <div className="row g-4">
  {cards.map((item, index) =>
    item.category === "recommended" ? (
      <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Cards data={item} />
      </div>
    ) : null
  )}
        </div>
      </div>

  
      <footer className="container mt-5 py-4 border-top">
        <div className="row text-center text-sm-start align-items-center">
          <div className="col-12 col-sm-4 mb-3 mb-sm-0">
            <p>
              Developed By{" "}
              <a href="https://github.com/jgudo" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black", fontSize: "15px"}}>
                JULIUS GUEVARRA
              </a>
            </p>
          </div>

          <div className="col-12 col-sm-4 text-center mb-3 mb-sm-0">
            <img
              src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
              className="img-fluid"
              style={{ maxWidth: "120px" }}
              alt="logo"
            />
            <p className="small mt-2">© 2026</p>
          </div>

          <div className="col-12 col-sm-4 text-sm-end">
            <p>
              Fork this project{" "}
              <a href="https://github.com/jgudo/ecommerce-react" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black", fontSize: "15x"}}>
                Here
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
