import React, { Component } from "react";
import { Content_Contact } from "../Content";
import "./style.css"


export class Section_3 extends Component{



    render(){

        return <>
        <div className="P-main-section">
        <h2>Contact Page</h2>
        <p>
           You may use Simple Contact Form to send email to your inbox. You can modify 
           and use this template for your website. Header image has a parallax effect. 
           Total 3 HTML pages included in this template.
        </p>
        </div>
      <Content_Contact/>
        </>
}
}