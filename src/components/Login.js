/*form input{
  width: 98%;
  padding:5% 1%;
}*/ 
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const dispatch = useDispatch();
  const [loginData, handleLoginData] = useForm({
    email: "",
    password: "",
  });

  const { lEmail, lPassword } = loginData;

  const handleLogin=(e)=>{
    e.preventDefault();
    // Disparar la accion de autenticacion 
    dispatch( startLogin( lEmail, lPassword ) );
  }

  return (
    <div className="App">
      <div className="main-box">
        <img
          src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/devchallenges.svg"
          className="dev"
        ></img>
        <b>Login</b>
        <form onSubmit={ handleLogin }>
          <input
            type="text"
            placeholder="Email"
            className="email"
            name="lEmail"
            value={lEmail}
            onChange={handleLoginData}
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="password"
            name="lPassword"
            value={lPassword}
            onChange={handleLoginData}
          ></input>
          <button className="enter">Login</button>
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
          Dont you have an account yet? <a href="/register">Register</a>
        </p>
      </div>
      <div className="credits">
        <p className="grey">created by Gabriela Galindo</p>
        <p className="grey">devChallengues.io</p>
      </div>
    </div>
  );
};
