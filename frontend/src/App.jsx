import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import "./App.css";
import NavBar from "@components/NavBar";
import About from "@pages/About";
import Skills from "@pages/Skills";
import Contact from "@pages/Contact";
import Portfolio from "@pages/Portfolio";
import Login from "@pages/Login";
import ProtectedRoute from "@pages/layouts/ProtectedRoute";
import ProjectManagement from "@pages/ProjectManagement";
import AddProject from "@pages/AddProject";

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
                <ProjectManagement />
              </ProtectedRoute>
            }
          />
          <Route path="/amina-milan" element={<Login />} />
          <Route path="/ajouter-projet" element={<AddProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
