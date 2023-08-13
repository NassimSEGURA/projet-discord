import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Acceuil from "./pages/Acceuil";
import Login from "./pages/Login";
import Nitro from "./pages/Nitro";
import Securite from "./pages/Securite";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="login" element={<Login />} />
          <Route path="nitro" element={<Nitro />} />
          <Route path="securite" element={<Securite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
