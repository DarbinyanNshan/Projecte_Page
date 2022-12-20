import React from "react"
import "./style.css"

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {FaInstagram } from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";
import { FaTwitter} from "react-icons/fa";
import { Footer_Contact } from "./footer";






export const Content_Contact = () =>{
      
         
    return  <>
    <div className="content_main">
      <div className="input">
        <input className="name" type="text" placeholder="Name" /><br/>
        <input className="email" type="email" placeholder="Email" /><br/>
        <button className="send_btn">Send</button>
      </div>
      <div className="addres">
        <h3 className="addres_title">Our Address</h3>
        <p className="addres_text">180 Orci varius natoque penatibus et magnis 
                                  dis parturient montes, nascetur ridiculus mus 
                                  10550</p>
        <p className="addres_icon"><BsFillTelephoneFill/>080-090-0110</p>    
        <p className="addres_icon"><MdEmail/>info@company.co</p>     
            <div className="addres_icons">
              <div className="addres_iconc">
              <BsFacebook/>
              </div>
              <div className="addres_iconc">
              <FaTwitter/>            
              </div> 
              <div className="addres_iconc">
             <FaInstagram/>           
              </div>
               
            </div>          
      </div>
      </div>

<Footer_Contact/>
                
        </>
     
}