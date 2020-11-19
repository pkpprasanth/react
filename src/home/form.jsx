import React, { Component } from 'react'
import New from './new';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            myFullName: '',
            myContent: '',
            email: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
       // console.log(event)
       // console.log(event.target.name)
       // console.log(event.target.value)
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleFocusClick = (event) => {
        event.preventDefault()
            this.inputEmailRef.current.focus()
    }
    handleClearClick = (event) => {
        event.preventDefault()
            this.inputFullNameRef.current.value = ''
            this.setState({
                myFullName: ''
            })
    }
    render() {
        const {myFullName} = this.state
         const {email} = this.state
        return (

            <div>
        <New value={this.state} ></New>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {myFullName}</p>
        <form onSubmit={this.handleSubmit}>
            <input type='text' value={email} name='email'  onChange={this.handleInputChange}/>
            <input type='text'  name='myContent'  onChange={this.handleInputChange}/>
            <input type='text' onChange={this.handleInputChange} name='myFullName'/>
          <p><button>Send Message</button></p>
          <p><button onClick={this.handleFocusClick}>Focus</button></p>
          <p><button onClick={this.handleClearClick}>Clear</button></p>
        </form>
      </div>
            
        )
    }
}
