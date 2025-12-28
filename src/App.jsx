import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="background-image">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful plants 🌱</p>
      <button onClick={() => navigate("/plants")}>
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
