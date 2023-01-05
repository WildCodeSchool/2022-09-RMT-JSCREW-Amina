import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.css";
import NavBar from "@components/NavBar";
import About from "@pages/About";
import Login from "@pages/Login";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APROPOS" element={<About />} />
          <Route path="/Milan" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
