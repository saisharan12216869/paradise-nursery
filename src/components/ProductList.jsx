import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Aloe Vera", price: 200, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 250, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 300, category: "Indoor" },

  { id: 4, name: "Rose", price: 150, category: "Flower" },
  { id: 5, name: "Jasmine", price: 180, category: "Flower" },
  { id: 6, name: "Tulip", price: 220, category: "Flower" },

  { id: 7, name: "Bonsai", price: 500, category: "Decorative" },
  { id: 8, name: "Money Plant", price: 200, category: "Decorative" },
  { id: 9, name: "Lucky Bamboo", price: 350, category: "Decorative" },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
  <>
    <Navbar />
    <h1>Plants</h1>

    <div className="products">
      {plants.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </>
);
}