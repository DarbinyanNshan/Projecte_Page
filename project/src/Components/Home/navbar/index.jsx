import React, { Component } from "react";
import './style.css';

export class NavBar  extends Component {

    render(){
        return (
            
            <div id="navbar">
                <img src="/src/assets/images/logo.jpg" />
                <h4>Simple House <p className="p_nb">new restaurant template</p></h4>
                 <ul className="ul_nb">
                <li className="li_1">Home</li>
                <li className="li_2">About</li>
                <li className="li_3">Contact</li>
               </ul>

            </div>
        )
    }
}