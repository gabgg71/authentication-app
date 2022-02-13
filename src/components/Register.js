import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "../hooks/useForm";


export const Register = () => {
  const dispatch= useDispatch();
  const [registerData, handleRegisterData] = useForm({
    email: "",
    password: "",
  });

  const { rEmail, rPassword } = registerData;

  const handleRegister=()=>{
    // dispatch( startRegister( rEmail, rPassword1, rName ) );
  }
  
  return (
    <div className="App">
      <div className="main-box">
        <img
          src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/devchallenges.svg"
          className="dev"
        ></img>
        <b className="join">Join thousands of learners from around the world</b>
        <p>
          Master web development by making real-life projects,There are multiple
          paths for you to choose{" "}
        </p>
        <form onSubmit={handleRegister}>
        <input
            type="text"
            placeholder="Email"
            className="email"
            name="rEmail"
            value={rEmail}
            onChange={handleRegisterData}
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="password"
            name="rPassword"
            value={rPassword}
            onChange={handleRegisterData}
          ></input>
          <button className="enter">Start coding now</button>
        </form>
        <p className="grey">or continue with these social profile</p>
        <div className="apps">
          <img
            src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/Google.svg"
            alt="google"
          ></img>
          <img
            src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/Facebook.svg"
            alt="facebook"
          ></img>
          <img
            src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/Gihub.svg"
            alt="github"
          ></img>
        </div>
        <p className="grey">
          Already a member? <a href="">Login</a>
        </p>
      </div>
      <div className="credits">
        <p className="grey">created by Gabriela Galindo</p>
        <p className="grey">devChallengues.io</p>
      </div>
    </div>
  );
};
