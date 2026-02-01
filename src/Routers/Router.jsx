import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ShopDetails from "./Pages/ShopDetails";

import Recommended from "./Pages/Recommonded";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Search from "../Search";
import Filter from "./Pages/Filter";
import Products from "./Pages/Products";
import AddToCart from "../AddToCart";
import CartPage from "../CartPage";
import Navbar from "../Navbar";
import Featured from "./Pages/Featured";



export default function Routers() {
    return ( 
        <>

        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/shop/:id" element={<ShopDetails/>}></Route>
            <Route path="/recommended" element={<Recommended/>}></Route> 
            <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/signin" element={<SignIn/>}></Route>
              <Route path="/search" element={<Search/>} />
              <Route path="/filter" element={<Filter/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
            <Route path="/addToCart" element={<AddToCart/>}></Route>
             <Route path="/cartpage" element={<CartPage/>}></Route>
              <Route path="/featured" element={<Featured/>}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}