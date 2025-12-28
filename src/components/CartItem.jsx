import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

export default function CartItem() {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <h1>Shopping Cart</h1>

      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h2>Total Amount: ₹{totalAmount}</h2>
      <button>Checkout (Coming Soon)</button>
    </>
  );
}
