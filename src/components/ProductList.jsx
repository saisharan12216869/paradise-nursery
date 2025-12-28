import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import "./ProductList.css";

const plantsData = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 200, image: "/images/aloe.jpg" },
    { id: 2, name: "Snake Plant", price: 250, image: "/images/snake.jpg" },
    { id: 3, name: "Peace Lily", price: 300, image: "/images/lily.jpg" },
    { id: 4, name: "Spider Plant", price: 220, image: "/images/spider.jpg" },
    { id: 5, name: "ZZ Plant", price: 280, image: "/images/zz.jpg" },
    { id: 6, name: "Money Plant", price: 180, image: "/images/money.jpg" },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 150, image: "/images/rose.jpg" },
    { id: 8, name: "Jasmine", price: 180, image: "/images/jasmine.jpg" },
    { id: 9, name: "Tulip", price: 220, image: "/images/tulip.jpg" },
    { id: 10, name: "Sunflower", price: 170, image: "/images/sunflower.jpg" },
    { id: 11, name: "Hibiscus", price: 200, image: "/images/hibiscus.jpg" },
    { id: 12, name: "Lavender", price: 260, image: "/images/lavender.jpg" },
  ],
  Bonsai: [
    { id: 13, name: "Juniper Bonsai", price: 500, image: "/images/juniper.jpg" },
    { id: 14, name: "Ficus Bonsai", price: 450, image: "/images/ficus.jpg" },
    { id: 15, name: "Pine Bonsai", price: 550, image: "/images/pine.jpg" },
    { id: 16, name: "Maple Bonsai", price: 600, image: "/images/maple.jpg" },
    { id: 17, name: "Elm Bonsai", price: 480, image: "/images/elm.jpg" },
    { id: 18, name: "Cedar Bonsai", price: 520, image: "/images/cedar.jpg" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
        </div>
      </nav>

      {/* PRODUCT LIST */}
      <div className="product-container">
        {Object.keys(plantsData).map(category => (
          <div key={category}>
            <h2 className="category-title">{category} Plants</h2>
            <div className="plant-grid">
              {plantsData[category].map(p => (
                <div className="plant-card" key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p>₹{p.price}</p>
                  <button
                    disabled={isInCart(p.id)}
                    onClick={() => dispatch(addItem(p))}
                  >
                    {isInCart(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
