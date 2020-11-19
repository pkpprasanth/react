import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'; 

export default class Axios extends Component {
   state={
     data:[],
     datanew:[]
   }

   componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
           console.log(res);
           this.setState({data:res.data});
       })
   }
   
    render() {
        return (
            
            <div id="message">
                <button onClick={this.getdata}>Get Values</button>
                {this.state.data.map((e) =>(
                <React.Fragment>
                  <div class="player">
                  <div class="strength">Name : {e.name} (ID : {e.id})</div>
                  <div>Phone : {e.phone}</div>
                  <div>Company : ${e.company.name}</div>
                  <div>City    : ${e.address.city}</div>
                  <div>Zipcode : ${e.address.zipcode}</div>
                  </div>
                </React.Fragment>
                   ))}
            </div>
            
        )
    }
    getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(res=>{
            console.log(res);

            this.setState({datanew:res.data});
            console.log(this.state.datanew);
        }) 
    }
}
