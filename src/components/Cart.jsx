import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Your Shopping Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <h3>Total Amount: ₹{totalAmount}</h3>

            <button>Checkout (Coming Soon)</button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
