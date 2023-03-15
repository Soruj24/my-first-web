import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/Router/About";
import Blog from "./Components/Router/Blog";
import Contact from "./Components/Router/Contact";
import Home from "./Components/Router/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/About/:title" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
