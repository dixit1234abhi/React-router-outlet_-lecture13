import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/UI/Layout";
import { Home } from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="Home" element={<Home />}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="Register" element={<Register/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}
