import {Link} from "react-router-dom";

const NavBar = ({toggle, setToggle}) => {
    return ( 
        <nav  style={{left: toggle && "0"}} className="navbar">
           
                <ul className="navbar-links">
               <Link to="/" onClick={()=>setToggle(false)} className="navbar-link">Home</Link>
               <Link to="/author"   onClick={()=>setToggle(false)} className="navbar-link">Authors</Link>
               <Link to="/about"  onClick={()=>setToggle(false)} className="navbar-link"> About US</Link>
               <Link  to="/contact " onClick={()=>setToggle(false)} className="navbar-link"> Contact</Link>
               <Link to="/register" onClick={()=>setToggle(false)} className="navbar-link"> Register</Link>

                </ul>
           
        </nav>
     );
    }
 
export default NavBar;