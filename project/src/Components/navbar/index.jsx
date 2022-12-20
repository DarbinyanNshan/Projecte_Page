import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './style.css';

export class NavBar  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    render() {
        return (
            
            <div id="navbar">
            
                <h4>Simple House <p className="p_nb">new restaurant template</p></h4>
                 <ul className="ul_nb">
            
                <NavLink to="/"  className="li_1">Home</NavLink>
                <NavLink to="/about" className="li_2">About</NavLink>
                <NavLink to="/contact" className="li_3">Contact</NavLink>
               </ul>

            </div>
        )
    }
}