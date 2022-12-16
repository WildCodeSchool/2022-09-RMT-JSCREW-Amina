import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.css";
import NavBar from "@components/NavBar";
import About from "@pages/About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APROPOS" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
