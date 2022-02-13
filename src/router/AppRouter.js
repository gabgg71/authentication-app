import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Profile } from "../components/Profile";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Edit } from "../components/Edit";

export const AppRouter = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  console.log(checking);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={(!!uid ? <Profile /> : <Login />)} />
          <Route exact path="/edit" element={(!!uid ? <Edit /> : <Login />)} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};
