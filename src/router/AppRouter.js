import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "../components/Profile";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Edit } from "../components/Edit";
import {store} from '../store/store.js';
import { userContext } from "../hooks/userContext";

export const AppRouter = () => {
  let [permitir, setPermitir]= useState(false)
  
  return (
    <userContext.Provider value={{ permitir, setPermitir }}>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={(permitir ? <Profile/> : <Login />)} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}>
          <Route path="*" element={<Register />} />
        </Route>
          <Route exact path="/profile" element={(permitir ? <Profile /> : <Login />)} />
          <Route exact path="/edit" element={(permitir ? <Edit /> : <Login />)} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </userContext.Provider>
  );
};
