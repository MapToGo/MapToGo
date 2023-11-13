import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Path from "./page/Path";
import Map from "./page/Map";
import Welcome from "./page/Welcome";
import FormInputData from "./components/FormInputData";

import Register from "./page/Register";
import Background from "./components/Background";
import FavPath from "./page/FavPath";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <Background>
              <Welcome />
            </Background>
          }
        />
        <Route
          path="/login"
          element={
            <Background>
              <Login />
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
        <Route
          path="/favpath"
          element={
            <Background>
              <FavPath />
            </Background>
          }
        />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
