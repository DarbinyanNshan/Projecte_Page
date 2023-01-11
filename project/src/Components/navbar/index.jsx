import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './style.css';
import logo from "../../assets/images/logo.jpg"

export class NavBar  extends Component {
   

    render() {
        return (
            
            <div id="navbar">
                
                <h4>
                <img src={logo} alt="" />
                Simple House <p className="p_nb">new restaurant template</p>
                </h4>
                
                 <ul className="ul_nb">
                <NavLink to="/" className="li_1"  >Home</NavLink>
                <NavLink to="/about" className="li_2">About</NavLink>
                <NavLink to="/contact" className="li_3">Contact</NavLink>
               </ul>

            </div>
        )
    }
}