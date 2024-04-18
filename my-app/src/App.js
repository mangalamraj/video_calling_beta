import React from "react";
import { Route, Routes } from "react-router-dom";
import SecondPage from "./pages/SecondPage";
import Lobby from "./pages/lobby";
import Login from "./pages/login";
import Signup from "./pages/signup";
import DataProvider from "./context/data-provider";

const App = () => {
  return (
    <DataProvider>
      <Routes>
        <Route exact path="/" element={<Lobby />} />
        <Route exact path="/second" element={<SecondPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </DataProvider>
  );
};
export default App;
