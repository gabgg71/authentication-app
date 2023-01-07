import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';
import { userContext } from '../hooks/userContext';
import {store} from '../store/store.js';

export const Header = () => {
  const { permitir, setPermitir } = useContext(userContext);
  const [open, setOpen] = useState(false);
  let [user, _] = useState(store.getState().info);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const display=()=>{
      setOpen(!open);
  }

  const logout=()=>{
    window.location.href = "/";
  }
  return (
    <div className="header">
      <img
        src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/devchallenges.svg"
        className="dev" alt="devlogo"
      ></img>
      <div className="padre">
        <div className="basic">
          <img src={user.img || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg"} alt="profilePhoto" className="photo2"></img>
          <p>{user.name.split(' ')[0]}</p>
          <button className="inline">
          <i className="material-icons" onClick={display}>arrow_drop_down</i>
          </button>
        </div>
        {open && (
          <div className="options">
            <button className="inline" onClick={()=>{navigate("/profile", {replace:true})}}>
            <span class="material-icons">account_circle</span>
            <p>
              My profile
            </p>
            </button>
            <button className="inline">
            <span class="material-icons">people</span>
            <p>
              Group chat
            </p>
            </button>
            <button className="inline" onClick={logout}>
            <span class="material-icons">logout</span>
            <p>
              Logout
            </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
