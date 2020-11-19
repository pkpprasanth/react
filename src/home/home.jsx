import React, { Component } from "react";
import '../App.css'; 
import Button from '@material-ui/core/Button';

export default class Home extends Component {
    constructor(props){
        super(props);
    this.state={
        value:this.props.value
    };
        // this.count1=this.count1.bind(this)
    
}
    count=()=>{
        this.setState({value:this.state.value+1});
    }
    count1(){
        this.setState({value:this.state.value-1});
    }
  render() {
      console.log("new props ",this.props)
    return (
      <div>
          <h2>{this.props.children}</h2>
        <h1 id="new">Count <span>{this.value()}</span></h1>
        <Button id="btn" onClick={this.count} variant="outlined" color="primary">+</Button>
        <Button id="btn" onClick={this.count1.bind(this)} variant="outlined" color="secondary">-</Button>
      </div>
    );
  }
    value() {
     
        return this.state.value===0?<h1>Zero</h1>:<h1>{this.state.value}</h1>;
      
    }
   


}
