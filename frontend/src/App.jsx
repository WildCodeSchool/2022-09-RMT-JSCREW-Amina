import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.css";
import NavBar from "@components/NavBar";
import About from "@pages/About";
import Carousel from "@components/Carousel/Carousel";
import Skills from "@pages/Skills";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APROPOS" element={<About />} />
          <Route path="/PORTFOLIO" element={<Carousel />} />
          <Route path="/COMPÉTENCES" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
