import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";
// import AddToCart from "./Router/AddToCart";


export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search?query=${search}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
   
      <Link className="navbar-brand" to="/">
        <img
          src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
          width="120"
          alt="logo"
        />
      </Link>
        
     
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/featured">Featured</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recommended">Recommended</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"   to="/filter">Filter</Link>
          </li>
        </ul>

 
        <input
          className="form-control me-2 mb-2 mb-lg-0"
          type="search"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          style={{ maxWidth: "220px" , marginLeft: "-5%"}}
        />

    
        <div className="me-3">
          <AddToCart/>
        </div>

 
        <button
          className="btn btn-dark me-2"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

        <button
          className="btn btn-outline-dark"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      {/* </div> */}
    </nav>
  );
}
