import React, { Component } from "react";
import "./style.css"
import { FaCocktail } from "react-icons/fa";
import { FaPepperHot } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";




export class C_footer extends Component{



    render(){

        return  <>
         <div className="f_imag">
              </div>
              <div className="tree">
                 <div className="one">
                    <div className="one_icon"><FaPepperHot/></div>
                    <p className="one_text">
                        Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan,
                        porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                    <button className="one_btn">Read More</button>
                 </div>
                 <div className="two">
                    <div  className="one_icon"><FaSeedling/></div>
                    <p className="one_text">
                    Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.
                    Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p>
                    <button className="two_btn">Read More</button>
                 </div>
                 <div className="tre">
                    <div className="one_icon"> <FaCocktail/></div>
                    <p className="one_text">
                    Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. 
                    Duis dignissim egestas turpis sit.</p>
                    <button className="tree_btn">Read More</button>
                 </div>
                 </div>
              
              </>
        
    }
}