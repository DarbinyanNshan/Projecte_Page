import React from "react"
import "./style.css"
import { useState } from "react"



export const Footer_Contact = () =>{
    const [btn_1,setBtn_1] = useState(false)
    const Change_1 = ()=>{
        setBtn_1(!btn_1)
      } 

    const [btn_2,setBtn_2] = useState(false)
    const Change_2 = ()=>{
        setBtn_2(!btn_2)
      } 

    const [btn_3,setBtn_3] = useState(false)
    const Change_3 = ()=>{
          setBtn_3(!btn_3)
        } 

    const [btn_4,setBtn_4] = useState(false)
    const Change_4 = ()=>{
              setBtn_4(!btn_4)
            } 
      
    return <>
    <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14689.352381646784!2d-43.3749723!3d-23.0113552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb71850ae80d%3A0xd28011cb74ca578e!2sGrand%20Hyatt%20Rio%20De%20Janeiro!5e0!3m2!1sru!2s!4v1671548446172!5m2!1sru!2s"
     width="1200" height="450" style={{Border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="footer_contact">
          <h6 className="footer_contact_tittle">FAQs</h6><br/>
          <p className="footer_contact_text">This section comes with Accordion tabs for different questions and answers about S
                                              imple House HTML CSS template. Thank you. #666</p>
    </div>
    
    
    <div className="footer_btn">
        <button onClick={Change_1} className="footer_btn_1">1. Fusce eu lorem et dui #09C maximus varius?</button><br/>
        {btn_1? <div className="input_text"><p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem,
                       ac egestas massa sollicitudin vel. Nam scelerisque vulputate 
                       quam mollis pretium. Morbi condimentum volutpat.</p></div>: null } 
        <button className="footer_btn_1"  onClick={Change_2}>2. Vestibulum #999 ante ipsum primis in faucibus orci?</button><br/>
        {btn_2? <div className="input_text"><p>Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, 
                                               sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis.
                                               Integer est sapien, sagittis vel massa vel, interdum euismod erat. 
                                               Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.
                                               </p></div>: null } 
        <button className="footer_btn_1" onClick={Change_3}> 3. Um erat. Lorem ipsum dolor sit amet consectetur?</button><br/>
        {btn_3? <div className="input_text"><p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
                                                Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Maecenas interdum porttitor imperdiet. Integer facilisis.
                                               </p></div>: null } 
        <button className="footer_btn_1"  onClick={Change_4}>4. Ut ac erat sit amet neque efficitur faucibus et in lectus?</button>
        {btn_4? <div className="input_text"><p>Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur,
                                                 sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex,
                                                  facilisis ac libero a, blandit ullamcorper enim.
                                               </p></div>: null } 

        <h1 className="footer_title">Copyright © 2045 Simple House | Design: TemplateMo</h1>
    </div>
       
        
    </>
}