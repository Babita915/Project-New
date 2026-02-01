import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { JsonFile } from "./JsonFile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Redux/Slice";
import Products from "./Products";
import Cards from "./Card";

export default function ShopDetails() {
    const {id} = useParams();
    const cards = JsonFile();
    const [size, setSize] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);


    const product = cards.find((item) => item.id === Number(id))

    return (
        <>
         <button
  style={{
    position: "absolute",
    marginTop: "3%",
    marginLeft: "8%",
    background: "none",
    border: "none",
    color: "black",
    cursor: "pointer"
  }}
  onClick={() => navigate("/shop")} 
>
  ← Back To Shop
</button>

       <div className="container my-5" style={{width: "60%"}}>
  <div className="card p-4">
    <div className="row align-items-center">

          <div className="col-12">
        <img
          src={product.cardImage}
          className="img-fluid"
          style={{ background: "#f5f5f5", maxHeight: "80px", width: "120px", border: "1px solid black" }}
        />
      </div>

      <div className="col-12 col-md-6 text-center mb-4 ">
        <img
          src={product.cardImage}
          className="img-fluid"
          style={{ background: "#f5f5f5", height: "500px", marginLeft: "150px", marginTop: "-70px", width: "400px" }}
        />
      </div>

      <div className="col-12 col-sm-6 col-md-4 col-lg-3"  style={{marginLeft: "150px", marginTop: "-150px"}} >
        <p className="text-muted">{product.cardParagraph}</p>
        <h3>{product.cardHeading}</h3>
        <p>Lorem ipsum dolor sit amet...</p>

        <select className="form-select">
          <option>--- Select Size ---</option>
          <option>28 mm</option>
          <option>36 mm</option>
          <option>42 mm</option>
        </select>

        <h2>₹{product.price}</h2>
        <button className="btn btn-dark mt-3">
          Add To Basket
        </button>
      </div>

    </div>
  </div>
</div>

            

              <div className="col-12 col-md-6" style={{marginLeft: "7%", marginTop: "5%"}}>
            <h1>
              Recommended 
            </h1>
          </div>

           
          <button className="btn btn-link p-0 text-dark" style={{marginLeft: "90%", marginTop: "-3%"}} onClick={() => navigate("/featured")}>
            See All
          </button>
       


         <div className="container" >
            
                 <div className="row g-4">
                   {cards.map((item) =>
                     item.category === "recommended" ? (
                       <div
                         key={item.id}
                         className="col-12 col-sm-6 col-md-4" 
                       >
                         <Cards data={item} />
                       </div>
                     ) : null
                   )}
                 </div>
               </div>
        </>
    )
}


