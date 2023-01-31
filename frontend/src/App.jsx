import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.css";
import NavBar from "@components/NavBar";
import About from "@pages/About";
import Skills from "@pages/Skills";
import Contact from "@pages/Contact";
import Portfolio from "@pages/Portfolio";
import Admnistration from "@pages/Admnistration";
import Login from "@pages/Login";
import ProtectedRoute from "@pages/layouts/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APROPOS" element={<About />} />
          <Route path="/COMPÉTENCES" element={<Skills />} />
          <Route path="/CONTACT" element={<Contact />} />
          <Route path="/PORTFOLIO" element={<Portfolio />} />
          <Route
            path="/ADMIN"
            element={
              <ProtectedRoute>
                <Admnistration />
              </ProtectedRoute>
            }
          />
          <Route path="/LOGIN" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
