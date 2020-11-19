import React, { Component } from 'react'
import Home from './home';
export default class Newhome extends Component {
    state={
        counter:[
            {id:1,value:5},
            {id:2,value:0}
            
        ]
    }
    render() {
        return (
            <div>
                <h2>Hello</h2>
                {this.state.counter.map(counter=>(
                <Home key={counter.id} value={counter.value} newid={counter.id}>
                    <h2>counter {counter.id}</h2>
                </Home>
                ))}     
            </div>
        )
    }
}

