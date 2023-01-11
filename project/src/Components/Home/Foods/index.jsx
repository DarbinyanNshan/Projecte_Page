import React, { Component } from "react";
import "./style.css"

import pizza1 from "../../../assets/images/pizza/pizza_1.jpg"
import pizza2 from "../../../assets/images/pizza/pizza_2.jpg"
import pizza3 from "../../../assets/images/pizza/pizza_3.jpg"
import pizza4 from "../../../assets/images/pizza/pizza_4.jpg"
import pizza5 from "../../../assets/images/pizza/pizza_5.jpg"
import pizza6 from "../../../assets/images/pizza/pizza_6.jpg"
import pizza7 from "../../../assets/images/pizza/pizza_7.jpg"
import pizza8 from "../../../assets/images/pizza/pizza_8.jpg"

import salad1 from "../../../assets/images/solad/solad_1.jpg"
import salad2 from "../../../assets/images/solad/solad_2.jpg"
import salad3 from "../../../assets/images/solad/solad_3.jpg"
import salad4 from "../../../assets/images/solad/solad_4.jpg"
import salad5 from "../../../assets/images/solad/solad_5.jpg"
import salad6 from "../../../assets/images/solad/solad_6.jpg"


import noodle1 from "../../../assets/images/noodle/noodle_1.jpg"
import noodle2 from "../../../assets/images/noodle/noodle_2.jpg"
import noodle3 from "../../../assets/images/noodle/noodle_3.jpg"
import noodle4 from "../../../assets/images/noodle/noodle_4.jpg"
import noodle5 from "../../../assets/images/noodle/noodle_5.jpg"
import noodle6 from "../../../assets/images/noodle/noodle_6.jpg"









import { FoodBox } from "../FoodBox";
import { Footer } from "../footer";

export class Foods extends Component{
    constructor(props) {
        super(props)
        this.state = 
        { 
            list: [
                {
                    img: pizza1,
                    title: 'Fusce dictum finibus',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$45 / $55',
                    type: 'pizza'
                },
                {
                    img: pizza2,
                    title: 'Aliquam sagittis',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$65 / $70',
                    type: 'pizza'
                },
                {
                    img: pizza3,
                    title: 'Sed varius turpis',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$30.50',
                    type: 'pizza'
                },

                {
                    img: pizza4,
                    title: 'Aliquam sagittis',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$25.50',
                    type: 'pizza'
                },               
                {
                    img: pizza5,
                    title: 'Maecenas eget justo',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$80.25',
                    type: 'pizza'
                },
                {
                    img: pizza6,
                    title: 'Quisque et felis eros',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$20 / $40 / $60',
                    type: 'pizza'
                },
                {
                    img: pizza7,
                    title: 'Sed ultricies dui',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$94',
                    type: 'pizza'
                },
                {
                    img: pizza8,
                    title: 'Donec porta consequat',
                    description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                    price: '$15',
                    type: 'pizza'
                },

                {
                    img: salad1,
                    title: 'Salad Menu One',
                    description: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
                    price: '$25',
                    type: 'salad'
                },                
                {
                    img: salad2,
                    title: 'Second Title Salad',
                    description: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
                    price: '$30',
                    type: 'salad'
                },
                {
                    img: salad3,
                    title: 'Third Salad Item',
                    description: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
                    price: '$45',
                    type: 'salad'
                },
                {
                    img: salad4,
                    title: 'Superior Salad',
                    description: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
                    price: '$50',
                    type: 'salad'
                },
                {
                    img: salad5,
                    title: 'Sed ultricies dui',
                    description: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
                    price: '$55 / $60',
                    type: 'salad'
                },
                {
                    img: salad6,
                    title: 'Maecenas eget justo',
                    description: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
                    price: '$75',
                    type: 'salad'
                },
                
                
                {
                    img: noodle1,
                    title: 'Noodle One',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    price: '$12.50',
                    type: 'noodle'
                },                
                {
                    img: noodle2,
                    title: 'Noodle Second',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    price: '$15.50',
                    type: 'noodle'
                },
                {
                    img: noodle3,
                    title: 'Third Soft Noodle',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    price: '$20.50',
                    type: 'noodle'
                },
                {
                    img: noodle4,
                    title: 'Aliquam sagittis',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    price: '$30.25',
                    type: 'noodle'
                },
                {
                    img: noodle5,
                    title: 'Maecenas eget justo',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    price: '$35.50',
                    type: 'noodle'
                },
                {
                    img: noodle6,
                    title: 'Quisque et felis eros',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    price: '$40.50',
                    type: 'noodle'
                },

            ],
                


            
            active: false,
            filterlist: []
        }
    }

    componentDidMount(){
        this.FilterFood('pizza')
    }

    FilterFood = (a)=>{
        this.setState({filterlist : this.state.list.filter(x=>x.type === a)})
        this.setState({active: a})
    }

    render(){
        {console.log(this.state.filterlist)}
        return <div className="P-boxes">
            <div className="P-buttons">
                <button className={`passive ${this.state.active === 'pizza'? "active" : null}`} onClick={()=>this.FilterFood('pizza')}>Pizza</button>
                <button className={this.state.active === 'salad'? "active" : null} onClick={()=>this.FilterFood('salad')}>Salad</button>
                <button className={this.state.active === 'noodle'? "active" : null} onClick={()=>this.FilterFood('noodle')}>Noodle</button>
            </div>
            <div className="P-food-main">

             {this.state.filterlist.map((elem,index)=>{
                return <FoodBox 
                        key={index} 
                        img={elem.img} 
                        title={elem.title}
                        description={elem.description}
                        price={elem.price}/>
            })
            }
          
            </div>
            <Footer/>
        </div>
    }
}

