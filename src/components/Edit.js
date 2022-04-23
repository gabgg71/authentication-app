import React, { useState } from 'react';
import { Header } from "./Header";
import { useDispatch } from 'react-redux';
import { loadDataS} from '../actions/auth';
import { useForm } from "../hooks/useForm";
import {store} from '../store/store.js';
import { setInfo,setImage } from '../actions/info';

export const Edit=()=>{
    const dispatch = useDispatch();
    let [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [userData, handleData] = useForm({
        ...user,
        password: ""
    });

    const {name, bio, phone, email,  password} = userData;
  
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
        userData.password = user.password;
        dispatch( setInfo (userData));
    }

    //cambio de imagen     
    const load =(e)=>{
        let formData = new FormData();
        formData.append("image", e.target.files[0]);
        console.log(formData);
        console.log("lo hago")
        dispatch(setImage(formData));
        /*let reader = new FileReader();
        reader.readAsDataURL(newPhoto);
        reader.addEventListener('load', (e)=>{
           // document.querySelector('.photo').src = e.currentTarget.result;
           // document.querySelector('.photo2').src = e.currentTarget.result;
        });*/
    }




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
            <p>Name</p>
            <input type="text" placeholder="Enter your name" name="name"
            value={name} onChange={handleData}></input>
            <p>Bio</p>
            <textarea id="w3review" rows="6"  onChange={handleData} placeholder="Enter your bio" className="bio" name="bio"  value={bio}>
</textarea>
            <p>Phone</p>
            <input type="text" placeholder="Enter your phone" name="phone"
            value={phone} onChange={handleData}></input>
            <p>Email</p>
            <input type="text" placeholder="Enter your email" name="email"
            value={email} onChange={handleData}></input>
            <p>Password</p>
            <input type="text" placeholder="Enter your password" name="password"
            value={password} onChange={handleData}></input>
            <button className="enter save" onClick={saveInfo}>Save</button>
   
        </div>
        <div className='credits'>
            <p className='grey'>created by Gabriela Galindo</p>
            <p className='grey'>devChallengues.io</p>
          </div>
         </div>
           
        </>
      );
}