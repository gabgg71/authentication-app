import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../components/Profile";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Edit } from "../components/Edit";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={(!!localStorage.getItem('token') ? <Login/> : <Login />)} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={(!!localStorage.getItem('token') ? <Profile /> : <Login />)} />
          <Route exact path="/edit" element={(!!localStorage.getItem('token') ? <Edit /> : <Login />)} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};
