
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Path from "./page/Path";
import Map from "./page/Map";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/path" element={<Path />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
