import { Link } from "react-router-dom";
import "./forms.css"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  
    const [email, setEmail]= useState("");
    const [password , setPassword ] = useState("");
    const [userName, setUserName ] = useState("");
   
 //form submit handler => bch ki naaml click al button login ma yaamlch reload
 const formSubmitHandler =(e) =>{
     e.preventDefault() ;
     // in this step amalt instal ll biblio toastify bch kn ma hatitch emailwela password tokhrejli alert =validatio
     if(userName.trim() === "") return toast.error("username is required");
     if(email.trim() === "") return toast.error("email is required");
     if(password.trim() === "") return toast.error("password is required");
     console.log(email,password,userName);
 };
 
 
     return (  <div className="form-wrapper">
     <ToastContainer theme="colored" />
         <h1 className="form-title">
         Create New Account
         </h1>
         <form  onSubmit={formSubmitHandler} className="form">
             <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
             <input value={userName}  onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Username" />
             <input value={password} 
              onChange={(e) => setPassword(e.target.value)}
            
            type= "password" placeholder="password" />
             
            
 
             <button className="form-btn">
            Register
             </button>
         </form>
         <div className="form-footer"> {" "}
             don't have an account?
             <Link  to="/register" className="form-link">
           Already have an account
             </Link>
         </div>
     </div>
 );
 }
 
 
export default Register;