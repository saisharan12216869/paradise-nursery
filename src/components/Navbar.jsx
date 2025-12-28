import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav>
      <h2>Paradise Nursery</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/plants" style={{ color: "white", marginRight: "15px" }}>Plants</Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart 🛒 {count}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
