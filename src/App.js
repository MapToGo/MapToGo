
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Path from "./page/Path";
import Map from "./page/Map";
import BlueButton from "./components/BlueButton";





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/path" element={<Path />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
