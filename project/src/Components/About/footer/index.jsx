import React, { Component } from "react";
import './style.css';
import footer_img from "../../../assets/images/about/footer_img_2.jpg"


export class About_footer  extends Component {
    

    render(){
        

        return (
            <>
                <div className="footer_about" >
                    <img className="footer_img_about" src={footer_img} alt="" />
                    <div> 
                        <h1  className="footer_title_about">History of our restaurant</h1>
                        <p className="footer_text_about">Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. 
                        Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.
                        <span>
                        Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</span></p>
                    
                       
                        </div>
                    
                </div>
              <p className="footer_p_about">Copyright © 2045 Simple House | Design: TemplateMo</p>
             
              
            </>
        )
    }

}