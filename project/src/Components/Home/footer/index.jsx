import React, { Component } from "react";
import './style.css';

export class Footer  extends Component {
    constructor(props) {
        super(props) 
       
        

    }

    render(){
        

        return (
            <>
                <div className="footer_home" >
                    <img className="footer_img_home" src={require('../../../assets/images/footer.jpg')} alt="" />
                    <div> 
                        <h1  className="footer_title_home">Maecenas nulla neque</h1>
                        <p className="footer_text_home">Phasellus dui velit, feugiat sed elit ut, facilisis 
                                                  aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet,
                                                   consectetur adipiscing elit. Maecenas interdum porttitor imperdiet.
                                                    Integer facilisis.</p>
                         <button className="footer_btn_home">Read More</button>
                        </div>
                    
                </div>
              <p className="footer_p_home">Copyright © 2045 Simple House | Design: TemplateMo</p>
    
            </>
        )
    }

}