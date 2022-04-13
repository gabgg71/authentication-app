/*form input{
  width: 98%;
  padding:5% 1%;
}*/ 
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';
import { fetchSinToken } from '../helpers/fetch';
import { useForm } from "../hooks/useForm";
import { useSearchParams } from "react-router-dom";



export const Login = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const [loginData, handleLoginData] = useForm({
    email: "",
    password: "",
  });

  window.addEventListener('load', (event) => {
    setSearchParams(window.location.href);
    if(searchParams.get('code') !== null){
      console.log(searchParams.get('code'));
      let codigo = searchParams.get('code');
      fetchSinToken('auth/google-confirm2', {'code':codigo}, 'POST');
    }
  });

  
  
  
  const { lEmail, lPassword } = loginData;
  

  const handleLogin=(e)=>{
    e.preventDefault();
    // Disparar la accion de autenticacion 
    dispatch( startLogin( lEmail, lPassword ) );
  }

  const loginGoogle=async()=>{
    console.log('Presionaste google');
    let resp = await fetchSinToken('auth/url-google');
    const body = await resp.json();
    window.location.href =body.url;

  }

  useEffect(() => {
    return () => {
      window.removeEventListener('load', (event) => {
        setSearchParams(window.location.href);
        if(searchParams.get('code') !== null){
          console.log(searchParams.get('code'));
        }
      });
    }
  }, [searchParams, setSearchParams]);

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
          <img onClick={loginGoogle}
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
