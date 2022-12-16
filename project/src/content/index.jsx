import React, { Component } from "react";
import './style.css';



export class  Content  extends Component {
   

    render(){
        
        return (
            <div className="content">
               <ul className="ul_cnt">
                    <li className="li_cnt li_cnt_1">Pizza</li>
                    <li className="li_cnt li_cnt_2">Salad</li>
                    <li className="li_cnt li_cnt_3">Noodle</li>
                </ul>
                
                
                
            </div>
        )
    }

}



export class Image extends Component{
    constructor(props) {
        super(props) 
        this.state = {
             image_1:{
                imgSrc: require('../assets/images/pizza/pizza_1.jpg'),
                imgTitle: "Fusce dictum finibus",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$45 / $55",

                      },
             image_2:{
                    imgSrc: require('../assets/images/pizza/pizza_2.jpg'),
                    imgTitle: "Aliquam sagittis",
                    imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    imgPrice: "$65 / $70",
             },
             image_3:{
                imgSrc: require('../assets/images/pizza/pizza_3.jpg'),
                imgTitle: "Sed varius turpis",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$30.50",
             },
             image_4:{
                imgSrc: require('../assets/images/pizza/pizza_4.jpg'),
                imgTitle: "Aliquam sagittis",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$25.50",
             },
             image_5:{
                imgSrc: require('../assets/images/pizza/pizza_5.jpg'),
                imgTitle: "Maecenas eget justo",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$80.25",
             },
             image_6:{
                imgSrc: require('../assets/images/pizza/pizza_6.jpg'),
                imgTitle: "Quisque et felis eros",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$20 / $40 / $60",
             },
             image_7:{
                imgSrc: require('../assets/images/pizza/pizza_7.jpg'),
                imgTitle: "Sed ultricies dui",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$94",
             },
             image_8:{
                imgSrc: require('../assets/images/pizza/pizza_8.jpg'),
                imgTitle: "Donec porta consequat",
                imgText:  "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                imgPrice: "$15",
             },



        }
        
    }

    render(){
      

        
        return (<>
        <div className="images-items_1">
            <div className="image_1">
              <img className="img" src={this.state.image_1.imgSrc} alt="" />
              <h2 className="title">{this.state.image_1.imgTitle}</h2>
              <p className="text">{this.state.image_1.imgText}</p>
              <p className="price">{this.state.image_1.imgPrice}</p>
            </div>
            
            <div className="image_2">
              <img className="img" src={this.state.image_2.imgSrc} alt="" />
              <h2 className="title">{this.state.image_2.imgTitle}</h2>
              <p className="text">{this.state.image_2.imgText}</p>
              <p className="price">{this.state.image_2.imgPrice}</p>
            </div>

            <div className="image_3">
              <img className="img" src={this.state.image_3.imgSrc} alt="" />
              <h2 className="title">{this.state.image_3.imgTitle}</h2>
              <p className="text">{this.state.image_3.imgText}</p>
              <p className="price">{this.state.image_3.imgPrice}</p>
            </div>
            <div className="image_4">
              <img className="img" src={this.state.image_4.imgSrc} alt="" />
              <h2 className="title">{this.state.image_4.imgTitle}</h2>
              <p className="text">{this.state.image_4.imgText}</p>
              <p className="price">{this.state.image_4.imgPrice}</p>
            </div>
        </div>  


        <div className="images-items_2">
             <div className="image_5">
              <img className="img" src={this.state.image_5.imgSrc} alt="" />
              <h2 className="title">{this.state.image_5.imgTitle}</h2>
              <p className="text">{this.state.image_5.imgText}</p>
              <p className="price">{this.state.image_5.imgPrice}</p>
            </div>
            <div className="image_6">
              <img className="img" src={this.state.image_6.imgSrc} alt="" />
              <h2 className="title">{this.state.image_6.imgTitle}</h2>
              <p className="text">{this.state.image_6.imgText}</p>
              <p className="price">{this.state.image_6.imgPrice}</p>
            </div>
            <div className="image_7">
              <img className="img" src={this.state.image_7.imgSrc} alt="" />
              <h2 className="title">{this.state.image_7.imgTitle}</h2>
              <p className="text">{this.state.image_7.imgText}</p>
              <p className="price">{this.state.image_7.imgPrice}</p>
            </div> 
            <div className="image_8">
              <img className="img" src={this.state.image_8.imgSrc} alt="" />
              <h2 className="title">{this.state.image_8.imgTitle}</h2>
              <p className="text">{this.state.image_8.imgText}</p>
              <p className="price">{this.state.image_8.imgPrice}</p>
            </div>
            </div>
        </>
        
       
        )
    }

}
