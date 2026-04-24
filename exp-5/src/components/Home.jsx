import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Home() {
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2>Home Page</h2>

      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch(addItem({ id: Date.now(), name: "Item", price: 100 }))
        }
      >
        Add Item to Cart
      </button>
    </div>
  );
}

export default Home;