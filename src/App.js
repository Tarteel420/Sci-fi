import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Astrology from "./pages/Astrology";
import Astronomy from "./pages/Astronomy";
import Ufology from "./pages/Ufology";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ufology" element={<Ufology />} />
          <Route path="/astronomy" element={<Astronomy />} />
          <Route path="/astrology" element={<Astrology/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
