import React, { Component } from "react";
import './style.css';

export class Footer  extends Component {
    constructor(props) {
        super(props) 
       
        

    }

    render(){
        

        return (
            <>
                <div className="footer" >
                    <img className="footer_img" src={require('../../../assets/images/footer.jpg')} alt="" />
                    <div> 
                        <h1  className="footer_title">Maecenas nulla neque</h1>
                        <p className="footer_text">Phasellus dui velit, feugiat sed elit ut, facilisis 
                                                  aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet,
                                                   consectetur adipiscing elit. Maecenas interdum porttitor imperdiet.
                                                    Integer facilisis.</p>
                         <button className="footer_btn">Read More</button>
                        </div>
                    
                </div>
              <p className="footer_p">Copyright © 2045 Simple House | Design: TemplateMo</p>
             <div className="border">

            
             </div>
              
            </>
        )
    }

}