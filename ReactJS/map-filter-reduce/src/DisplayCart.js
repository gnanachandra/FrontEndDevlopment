import React,{Component} from "react"
import {products as data} from "./Data/data.js"
import { findSum } from "./helper.js";
export class DisplayCart extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            totalSum:0,
            isClicked:false
        }
        
    }
    handleClick=()=>{
        console.log("Clicked");
        const total = findSum(data);
        console.log(`Total Sum: ${total}`);
        this.setState({totalSum:total,isClicked:!this.state.isClicked});
    }
    render()
    {
        return (
            <div>
                <table border={1}>
                    <tr>
                        <th>Name of Item</th>
                        <th>Price </th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Discount Percentage</th>
                        <th>Discount Price</th>
                    </tr>
                    {
                        data.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.total}</td>
                                    <td>{item.discountPercentage}</td>
                                    <td>{item.discountedPrice}</td>
                                </tr>
                            )
                        })
                    }

                </table>
                <button onClick={this.handleClick}>FindSum</button>
                {this.state.isClicked && this.state.totalSum}
            </div>
        )
    }
}
export default DisplayCart;