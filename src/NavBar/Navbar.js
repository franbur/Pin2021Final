import React, { Component } from "react";
import logo from "../img/top-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="parte-superior" id="navbar">
        <div className="menu">
          <img
              src={logo}
              // className="imagen"
              alt="Logo."
              onClick={this.scrollToTop}
            />
          <ul className="menues">
          
            <Link
            activeClass="active"
            to="seccion1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Home</Link>

            <Link
            activeClass="active"
            to="seccion2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>About</Link>
            
            <Link
            activeClass="active"
            to="seccion3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Product</Link>
            
            <Link
            activeClass="active"
            to="seccion4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Services</Link>
            
            <Link
            activeClass="active"
            to="seccion5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Contact</Link>                                       
          </ul>
        </div>
      </nav>
      
    );
  }
}