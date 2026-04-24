import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import { useMemo, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return (
    <div className={`container mt-5 ${theme}`}>
      <h2>Cart Page (Exp-5)</h2>

      {items.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total Price: ₹{total}</h3>
    </div>
  );
}

export default Cart;