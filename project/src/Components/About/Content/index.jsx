import React from "react"
import "./style.css"

import img_1 from "../../../assets/images/about/img_1.jpg"
import img_2 from "../../../assets/images/about/img_2.jpg"
import img_3 from "../../../assets/images/about/img_3.jpg"
import img_4 from "../../../assets/images/about/img_4.jpg"




import {FaInstagram } from "react-icons/fa";
import {BsFacebook } from "react-icons/bs";
import { FaTwitter} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
import { C_footer } from "./footer"






export const Content = () =>{
      
         
    return  <>
     <div className="images">
      
                  <div className="image">
                     <img className="img_1" src={img_1} alt="" />
                     <div className="div_main">
                     <h2 className="title">Jennifer Soft</h2>
                     <h3 className="subtitle">Founder and CEO</h3>
                     <p className="text">
                      Vivamus cursus leo nec sem feugiat sagittis.
                      Duis ut feugiat odio, sit amet accumsan odio.
                      </p>
                     <div className="icons">
                     <div className="face"><BsFacebook /></div>
                     <div className="twit"><FaTwitter/></div>
                     <div className="insta"><FaInstagram/></div>
                     </div>
                     </div>
                  </div>
      
                  <div className="image">
                     <img className="img_2" src={img_2} alt="" />
                     <div className="div_main">
                     <h2 className="title">Daisy Walker</h2>
                     <h3 className="subtitle">Executive Chef</h3>
                     <p className="text">
                                Praesent non vulputate elit. Orci varius natoque et
                                 magnis dis parturient, nascetur ridiculus mus.
                      </p>
                     <div className="icons">
                     <div className="twit"><FaTwitter/></div>
                     <div className="face"><BsFacebook /></div>
                      </div>
                      </div>
                  </div>
      
                  <div className="image">
                     <img className="img_3" src={img_3} alt="" />
                     <div className="div_main">
                     <h2 className="title">Florence Nelson</h2>
                     <h3 className="subtitle">Kitchen Manager</h3>
                     <p className="text">
                                Aenean sapien sem, ultricies sed vulputate et,
                                auctor vel mauris. Integer sit amet diam eget est 
                                facilisis lacinia vitae.
                      </p>
                      <div className="icons">
                     <div className="face"><BsFacebook/></div>
                     <div className="insta"><FaInstagram/></div>
                     </div>
                     </div>
                  </div>
    
                  <div className="image"> 
                     <img className="img_4" src={img_4} alt="" />
                     <div className="div_main">
                     <h2 className="title">Valentina Martin</h2>
                     <h3 className="subtitle">Culinary Director</h3>
                     <p className="text">
                                 Praesent non vulputate elit. Orci varius natoque penatibus 
                                 et magnis montes, nascetur ridiculus mus.
                     </p>
                     <div className="icons">
                     <div className="twit"><FaTwitter/></div>
                     <div className="insta"><FaInstagram/></div>
                     <div className="face"><BsFacebook /></div>
                     <div className="you"><FaYoutube/></div>
                     </div>
                     </div>
                  </div>
              
                
    </div>
        <C_footer/>
        </>
     
}