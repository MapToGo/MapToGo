
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Path from "./page/Path";
import Map from "./page/Map";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Background>
              <Login />
            </Background>
          }
        />
        <Route
          path="/path"
          element={
            <Background>
              <Path />
            </Background>
          }
        />
        <Route
          path="/map"
          element={
            <Background>
              <Map />
            </Background>
          }
        />
        <Route
          path="/regist"
          element={
            <Background>
              <Register />
            </Background>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
