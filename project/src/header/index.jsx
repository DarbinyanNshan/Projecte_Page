import React, { Component } from "react";
import './style.css';

export class Header  extends Component {
    constructor(props) {
        super(props) 
       
        

    }

    render(){
        

        return (
            <div className="header">
                <h6>Welcome to Simple House</h6>
                 <p className="p_h">Total 3 HTML pages are included in this template. Header 
                    image has a parallax effect. You can feel free to download,
                    edit and use this TemplateMo layout for your commercial or 
                    non-commercial websites.</p>
            </div>
        )
    }

}