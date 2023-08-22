import { Link } from "react-router-dom";
import "./forms.css"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setEmail]= useState("");
   const [password , setPassword ] = useState("");
   const [showPassword,setShowPassword] = useState(false)
//form submit handler => bch ki naaml click al button login ma yaamlch reload
const formSubmitHandler =(e) =>{
    e.preventDefault() ;
    // in this step amalt instal ll biblio toastify bch kn ma hatitch emailwela password tokhrejli alert
    if(email.trim() === "") return toast.error("email is required");
    if(password.trim() === "") return toast.error("password is required");
    console.log(email,password);
};

const showPasswordHandler =()=>{
    setShowPassword(prev =>!prev);
}
    return (  <div className="form-wrapper">
    <ToastContainer theme="colored" />
        <h1 className="form-title">
            Login to your account
        </h1>
        <form  onSubmit={formSubmitHandler} className="form">
            <input value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input value={password}  onChange={(e) => setPassword(e.target.value)}
            type={ showPassword ? "text" : "password"} placeholder="password" />
            { showPassword ? (
                <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon" ></i>
            ) :(
                <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>
            )}
            
           

            <button className="form-btn">
                Login
            </button>
        </form>
        <div className="form-footer"> {" "}
            don't have an account?
            <Link  to="/register" className="form-link">
                Register
            </Link>
        </div>
    </div>
);
};
 
export default Login;