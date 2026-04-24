import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div style={{ textAlign: "center" }}>

      <h1>React Router Example</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;