import React, { useState } from "react";
export const Header = () => {
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg" alt="profilePhoto"></img>
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
