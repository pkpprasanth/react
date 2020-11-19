import React, { Component } from 'react'
import Team from'./team'
import Button from '@material-ui/core/Button';

export default class Toto extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            value: null,
            name:"Prasanth"
        };
    }
    valueupdate=(e)=>{
     this.setState({value : e.target.value})
    }
    count=()=>{
        const name=this.state.value==="pkp"?"Prasanth":"PKP";
        this.setState({name,value:"new"})
    }

    render() {
        return (
            <div>
            <Team name={this.state.name}/>
            <input type="text" value={this.state.value} onChange={this.valueupdate}></input>
            <h1>Hello {this.state.value}</h1>
        
            <Button id="btn" onClick={this.count} variant="outlined" color="primary">+</Button>

            </div>
        )
    }
}
