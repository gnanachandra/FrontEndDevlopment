import React, { Component } from "react";
import "./styles.css";
export class ChangeColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRed: true,
            showYellow: false,
            showGreen: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({ showRed: false, showYellow: true, showGreen:
        false });
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("PrevProps:", prevProps);
        console.log("PrevState:", prevState);
        console.log("CurrentProps:", this.props);
        console.log("CurrentState:", this.state);
        if (this.state.showYellow) {
            setTimeout(() => {
            this.setState({ showRed: false, showYellow: false, showGreen:
            true });
            }, 1000);
        }
        if(this.state.showGreen){
            setTimeout(()=>{
            this.setState({showRed: true, showYellow: false, showGreen:
            false})
            },1000);
        }
        if(this.state.showRed){
            setTimeout(() => {
            this.setState({ showRed: false, showYellow: true,
            showGreen: false });
            }, 1000);
        }
    }
    render() {
        return (
            <div >
                <div className="container">
                <div className={this.state.showRed ? "circle-red" : "circle"}/>
                <div className={this.state.showYellow ? "circle-yellow" :"circle"} />
                <div className={this.state.showGreen ? "circle-green" :"circle"} />
                </div>
            </div>
        );
    }
}
export default ChangeColors;