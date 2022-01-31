import React from "react";
import logo from  "../../assets/img/top-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  // return(
  return (
    <nav className="nav" id="navbar">
      <img src={logo} alt="Logo."/>
      <div className="options"> 
        <Link activeClass="active" to="seccion1" smooth={true} duration={500}>
          Home
        </Link>

        <Link activeClass="active" to="seccion2" smooth={true} duration={500}>
          About
        </Link>
            
        <Link activeClass="active" to="seccion3"  smooth={true} duration={500}>
          Product
        </Link>
            
        <Link activeClass="active" to="seccion4" smooth={true} duration={500}>
          Services
        </Link>
            
        <Link activeClass="active" to="seccion5" smooth={true} offset={-70} duration={500}>
          Contact
        </Link>                                       
      </div>
    </nav>
    // <nav>
    //   <img
    //         src={logo}
    //         alt="Logo."
           
    //       />
    // </nav>
      
    );
  
}

export default NavBar;