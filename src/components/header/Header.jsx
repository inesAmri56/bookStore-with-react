import { useState } from "react";
import NavBar from "./NavBar";
import "./header.css";
import HeaderMiddle from "./headerMiddle";
import HeaderTop from "./headerTop";

const Header = () => {
 const [toggle,setToggle]= useState(false)
    return (
         <header className="header">
           <HeaderTop setToggle={setToggle} toggle={toggle}/ >
           <HeaderMiddle />
           <NavBar toggle={toggle} setToggle={setToggle} / >
        
     </header>
         
         );
}
 
export default  Header;