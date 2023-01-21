import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Index";
import Goat from "./components/Goat/Goat";
import Lighthouse from "./components/Lighthouse/Lighthouse";
import Vessel from "./components/Vessel/Vessel";
import CustomCursor from "./components/CustomCursor/CustomCursor";


function App() {
  return (
    <>
    <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goat" element={<Goat />} />
          <Route path="/lighthouse" element={<Lighthouse />} />
          <Route path="/vessel" element={<Vessel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
