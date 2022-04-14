import React, { useState } from 'react';
import { Header } from "./Header";
import { useDispatch } from 'react-redux';
import { loadDataS} from '../actions/auth';
import { useForm } from "../hooks/useForm";
import {store} from '../store/store.js';

export const Edit=()=>{
    const dispatch = useDispatch();
    let [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [userData, handleData] = useForm({
        ...user
    });

    const {dName, dBio, dPhone, dEmail,  dPassword} = userData;

    window.addEventListener('load', (event) => {
        dispatch( loadDataS(user) );
      });

    store.subscribe(() => {
    setUser(
        store.getState().info
    );
    });

    const toProfile=()=>{
        localStorage.setItem('user', JSON.stringify(store.getState().info));
        window.location.href ='/profile';
    }

    const openFile =()=>{
        const inputFile = document.querySelector('.invisible');
        inputFile.click();
    }

    const saveInfo=()=>{
        console.log(userData);
        setTimeout(() => {
            
        }, 2000);
    }
    
    const load =(e)=>{
        const newPhoto = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(newPhoto);
        reader.addEventListener('load', (e)=>{
            document.querySelector('.photo').src = e.currentTarget.result;
            document.querySelector('.photo2').src = e.currentTarget.result;
        });
    }

   //value={(user.phone == "sin definir")?(""):(user.phone)}


    return (
        <>
        <div className="App">
        <Header imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg"}/>
        <a onClick={toProfile} className="credits back">BACK</a>
        <div className="main-box">
            <b>Change Info</b>
            <p>Changes will be reflected to every service</p>
            <div className="inline">
                <div className="editImage">
                <div className="photoI">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg" className="photo"></img>
                </div>
                </div>
                <input className="invisible" type="file" onChange={load}></input> 
                <a className="change" onClick={openFile}>CHANGE PHOTO</a>
            </div>
            <form className="form-edit">
            <p>Name</p>
            <input type="text" placeholder="Enter your name" name="dName"
            value={dName} ></input>
            <p>Bio</p>
            <textarea id="w3review" rows="6"  placeholder="Enter your bio" className="bio" name="dBio"  value={dBio}>
</textarea>
            <p>Phone</p>
            <input type="text" placeholder="Enter your phone" name="dPhone"
            value={dPhone}></input>
            <p>Email</p>
            <input type="text" placeholder="Enter your email" name="dEmail"
            value={dEmail} ></input>
            <p>Password</p>
            <input type="text" placeholder="Enter your password" name="dPassword"
            value={dPassword}></input>
            <button className="enter save" onClick={saveInfo}>Save</button>
            </form>
        </div>
        <div className='credits'>
            <p className='grey'>created by Gabriela Galindo</p>
            <p className='grey'>devChallengues.io</p>
          </div>
         </div>
           
        </>
      );
}