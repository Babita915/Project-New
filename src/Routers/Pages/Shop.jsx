import React, { useState } from "react";
import { JsonFile } from "./JsonFile";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice";
import { toast } from "react-toastify";

export default function Shop() {
  const cards = JsonFile();
  const dispatch = useDispatch();

  const [visibleCount, setVisibleCount] = useState(12);

  const showMoreItems = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <>
      {/* PRODUCTS */}
      <div className="container my-5" style={{background: "rgb(250, 250, 250)"}}>
        <div className="row g-4">

          {cards.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-4 col-lg-2"
            >
              <div className="card h-100 shadow-sm">

                <Link
                  to={`/shop/${item.id}`}
                  className="text-decoration-none text-dark"
                >
                  <img
                    src={item.cardImage}
                    className="card-img-top img-fluid"
                    alt={item.cardHeading}
                  />

                  <div className="card-body text-center">
                    <h6 className="card-title">
                      {item.cardHeading}
                    </h6>
                    <p className="text-muted small">
                      {item.cardParagraph}
                    </p>
                  </div>
                </Link>

                <div className="card-footer bg-white border-0">
                  <button
                    className="btn btn-dark w-100"
                    onClick={() => {
                      dispatch(addItem(item));
                      toast.success("Item added to cart 🛒");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      
      {visibleCount < cards.length && (
        <div className="text-center mb-5">
          <button
            className="btn-show"
            onClick={showMoreItems}
          >
            Show More
          </button>
        </div>
      )}

  
      <div className="container-fluid border-top py-4">
        <div className="row text-center align-items-center">

          <div className="col-12 col-sm-4 mb-2 mb-sm-0">
            Developed By{" "}
            <a
              href="https://github.com/jgudo"
              target="_blank"
              rel="noreferrer"
              className="text-dark text-decoration-none"
            >
              JULIUS GUEVARRA
            </a>
          </div>

          <div className="col-12 col-sm-4 mb-2 mb-sm-0">
            <img
              src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
              width="120"
              alt="Logo"
            />
            <p className="small mt-1">© 2026</p>
          </div>

          <div className="col-12 col-sm-4">
            Fork this project{" "}
            <a
              href="https://github.com/jgudo/ecommerce-react"
              target="_blank"
              rel="noreferrer"
              className="text-dark text-decoration-none"
            >
              Here
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
