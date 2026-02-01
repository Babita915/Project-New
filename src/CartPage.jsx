import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementQty,
  decrementQty,
  clearCart
} from "./Redux/Slice";
import { toast } from "react-toastify";


export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4">

        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
          <h4 className="mb-0">
            My Basket <span className="text-muted">({cartItems.length} items)</span>
          </h4>

          <div>
            <button className="btn btn-outline-secondary me-2">
              Close
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(clearCart())}
            >
              Clear Basket
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              className="row align-items-center border-bottom py-3"
              key={item.id}
            >
              <div className="col-2 text-center">
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => dispatch(incrementQty(item.id))}
                >
                  +
                </button>
                <div className="fw-bold my-1">{item.qty}</div>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => dispatch(decrementQty(item.id))}
                >
                  −
                </button>
              </div>

              <div className="col-2">
                <img
                  src={item.cardImage}
                  alt={item.cardHeading}
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-4">
                <h6 className="mb-1">{item.cardHeading}</h6>
                <small className="text-muted">
                  Quantity: {item.qty} | Size: 28 mm
                </small>
              </div>

              <div className="col-2 fw-bold">
                ${(item.price * item.qty).toFixed(2)}
              </div>

              <div className="col-2 text-end">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {dispatch(removeItem(item.id));
                        toast.error("Item removed from basket ❌");
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <p className="mb-1 text-muted">Subtotal Amount</p>
              <h4>${subtotal.toFixed(2)}</h4>
            </div>
            <button className="btn btn-dark px-4 py-2">
              CHECK OUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
