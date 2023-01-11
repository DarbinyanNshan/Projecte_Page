import React from "react";
import { Component } from "react";
import "./style.css"


export class FoodBox extends Component{




    render(){
        const {img,title,description,price} = this.props

        return <div className="P-food-box">
        <img src={img} alt="nkar"/>
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>{price}</h5>
    </div>

    }
}