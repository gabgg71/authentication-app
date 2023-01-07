import React, {useContext, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { startRegister } from '../actions/auth';
import { useForm } from "../hooks/useForm";
import { userContext } from '../hooks/userContext';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { fetchSinToken } from '../helpers/fetch';


export const Register = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [registerData, handleRegisterData] = useForm({
    email: "",
    password: "",
  });
  const { setPermitir } = useContext(userContext);
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const { rEmail, rPassword } = registerData;

  useEffect(async() => {
    setSearchParams(window.location.href);
    if(searchParams.get('code') !== null){
      let codigo = searchParams.get('code');
      await fetchSinToken('auth/google-confirm', {'code':codigo, type: "register"}, 'POST');
    }
  }, []);



  const handleRegister=()=>{
    dispatch(startRegister( rEmail, rPassword ) ).then((resp)=>{
      if(resp && resp.payload.token){
        setPermitir(true);
        navigate('/profile');
      }
    });
  }

  const registerGoogle=async()=>{
    let resp = await fetchSinToken('auth/url-google');
    const body = await resp.json();
    localStorage.setItem('type', "register");
    window.location.href =body.url;

  }
  
  return (
    <div className="App">
      <div className="main-box">
        <img
          src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/devchallenges.svg"
          className="dev" alt='alt'
        ></img>
        <b className="join">Join thousands of learners from around the world</b>
        <p>
          Master web development by making real-life projects,There are multiple
          paths for you to choose{" "}
        </p>
        <form>
        <input
            type="text"
            placeholder="Email"
            className="inp-log email"
            name="rEmail"
            value={rEmail}
            onChange={handleRegisterData}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="inp-log password"
            name="rPassword"
            value={rPassword}
            onChange={handleRegisterData}
          ></input>
          <button className="enter" onClick={handleRegister}>Start coding now</button>
        </form>
        <p className="grey">or continue with these social profile</p>
        <div className="apps" onClick={registerGoogle}>
          <img
            src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/Google.svg"
            alt="google"
          ></img>
          <img
            src="https://raw.githubusercontent.com/gabgg71/authentication-app/3897732eb8c9560fc203f2586355c311a46623f6/public/Gihub.svg"
            alt="github"
          ></img>
        </div>
        <p className="grey">
          Already a member? <a href="/">Login</a>
        </p>
      </div>
      <div className="credits">
        <p className="grey">created by Gabriela Galindo</p>
        <p className="grey">devChallengues.io</p>
      </div>
    </div>
  );
};
