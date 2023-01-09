import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Index";
import Goat from "./components/Goat/Goat";
import Lighthouse from "./components/Lighthouse/Lighthouse";
import Vessel from "./components/Vessel/Vessel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/goat" element={<Goat />} />
          <Route path="/lighthouse" element={<Lighthouse />} />
          <Route path="/vessel" element={<Vessel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
