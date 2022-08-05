// import React-router-dom
import { Routes, Route } from "react-router-dom";

// import home
import Home from "../components/homePage/home";
import Signup from "../components/signup/signup";
import Login from "../components/login/login";
import Notfound from "../components/NotFound";
//import Private from "../components/Private";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
