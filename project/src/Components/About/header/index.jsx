import React, { Component } from "react";
import { Content } from "../Content";
import { About_footer } from "../footer";
import "./style.css"


export class Section_2 extends Component{



    render(){

        return <div className="P-main-section">
        <h2>About Simple House</h2>
        <p>
        This is about page of simple house template. You can modify and use 
        this HTML template for your website. Total 3 HTML pages included in this 
        template. Header image has a parallax effect.
        </p>
        <Content/>
        <About_footer/>
        </div>
        
    }
}