import { Header } from "./Header";

export const Profile=({photo, name, bio, phone, email, password})=>{
    const toEdit=()=>{
        window.location.href ='/edit';
    }
    return (
        <>
        <div className="App">
        <Header imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg"}/>
          <div className='info'>
            <h1>Personal info</h1>
            <h2>Basic info, like your name and photo</h2> 
            <div className="empieza">
                <div>
                    <b>Profile</b>
                    <p className='grey'>Some info may be visible to other people</p>
                </div>
                <button className = "edit" onClick={toEdit}>Edit</button>
            </div>
            <div className="general">
                <div className="primero">
                <p className="key">PHOTO</p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg" alt="bill" className="photo"></img>
            </div>
            <div className="general">
                <div className="primero">
                    <p className="key">NAME</p>
                </div>
                <p className="text-info">Bill Gates</p>
            </div>
            <div className="general">
                <div className="primero">
                    <p className="key">BIO</p>
                </div>
                <p className="text-info">Bill Gates</p>
            </div>
            <div className="general">
                <div className="primero">
                    <p className="key" >PHONE</p>
                </div>
                <p className="text-info">Bill Gates</p>
            </div>
            <div className="general">
                <div className="primero">
                    <p className="key">EMAIL</p>
                </div>
                <p className="text-info">Bill Gates</p>
            </div>
            <div className="general end">
                <div className="primero">
                    <p className="key">PASSWORD</p>
                </div>
                <p className="text-info">Bill Gates</p>
            </div>
           </div>
        </div>
        <div className='data'>
            <p className='grey'>created by Gabriela Galindo</p>
            <p className='grey'>devChallengues.io</p>
          </div>
        </>
      );
}