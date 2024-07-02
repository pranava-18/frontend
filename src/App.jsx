import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Components/Footer";
import Upload from "./Components/Upload";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
