import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar bg-dark p-3">
      <Link to="/" className="text-white me-3">Home</Link>
      <Link to="/cart" className="text-white">Cart</Link>

      <button className="btn btn-light ms-3" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;