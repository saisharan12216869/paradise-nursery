import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      {/* CART PAGE */}
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {items.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>

                  <div className="qty-buttons">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                      }
                    >
                      −
                    </button>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, type: "increase" }))
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>
                    <strong>Total: ₹{item.price * item.quantity}</strong>
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h2 className="cart-total">Total Cart Amount: ₹{totalAmount}</h2>

            <div className="cart-actions">
              <button onClick={() => alert("Checkout Coming Soon!")}>
                Checkout
              </button>
              <Link to="/plants">
                <button>Continue Shopping</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartItem;
