import { Header } from "./Header";

export const Edit=()=>{
    const openFile =()=>{
        const inputFile = document.querySelector('.invisible');
        inputFile.click();
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

   


    return (
        <>
        <div className="App">
        <Header imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg"}/>
        <a href="/profile" className="credits back">BACK</a>
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
            <input type="text" placeholder="Enter your name"></input>
            <p>Bio</p>
            <textarea id="w3review" name="w3review" rows="6"  placeholder="Enter your bio" className="bio">
</textarea>
            <p>Phone</p>
            <input type="text" placeholder="Enter your phone"></input>
            <p>Email</p>
            <input type="text" placeholder="Enter your email"></input>
            <p>Password</p>
            <input type="text" placeholder="Enter your password"></input>
            <button className="enter save">Save</button>
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