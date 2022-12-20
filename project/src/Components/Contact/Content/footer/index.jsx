import React from "react"
import { useState,  useEffect } from "react"
import "./style.css"


export const Footer_Contact = () =>{
          
    const [flag,setFlag] = useState(true)

    const Change = ()=>{
        setFlag(!flag)
      } 

    useEffect((e)=> {
         
        
      },[flag])


    return <>
    <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.352381646784!2d-43.3749723!3d-23.0113552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb71850ae80d%3A0xd28011cb74ca578e!2sGrand%20Hyatt%20Rio%20De%20Janeiro!5e0!3m2!1sru!2s!4v1671548446172!5m2!1sru!2s"
     width="1200" height="450" style={{Border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div className="footer_contact">
          <h6 className="footer_contact_tittle">FAQs</h6><br/>
          <p className="footer_contact_text">This section comes with Accordion tabs for different questions and answers about S
                                              imple House HTML CSS template. Thank you. #666</p>
    </div>
    
    
    <div className="footer_btn">
        <button className="footer_btn_1"  onClick={Change}>1. Fusce eu lorem et dui #09C maximus varius?</button><br/>
        <button className="footer_btn_1">2. Vestibulum #999 ante ipsum primis in faucibus orci?</button><br/>
        <button className="footer_btn_1">3. Um erat. Lorem ipsum dolor sit amet consectetur?</button><br/>
        <button className="footer_btn_1">4. Ut ac erat sit amet neque efficitur faucibus et in lectus?</button>

        <h1 className="footer_title">Copyright © 2045 Simple House | Design: TemplateMo</h1>
    </div>
       
        
    </>
}