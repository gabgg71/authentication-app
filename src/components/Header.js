import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
export const Header = ({imagen}) => {
  const [open, setOpen] = useState(false);

  const display=()=>{
      setOpen(!open);
      
  }
  return (
    <div className="header">
      <img
        src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/devchallenges.svg"
        className="dev" alt="devlogo"
      ></img>
      <div className="padre">
        <div className="basic">
          <img src={imagen} alt="profilePhoto" className="photo2"></img>
          <p>Bill Gates</p>
          <i className="material-icons" onClick={display}>arrow_drop_down</i>
        </div>
        {open && (
          <div className="options">
            <span class="material-icons">account_circle</span>
            <p>
              My profile
            </p>
            <span class="material-icons">people</span>
            <p>
              Group chat
            </p>
            <hr></hr>
            <span class="material-icons">logout</span>
            <p>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
