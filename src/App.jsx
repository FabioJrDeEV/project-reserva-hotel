import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Dispo from "./pages/disponibilidade/Dispo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disponibilidade" element={<Dispo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
