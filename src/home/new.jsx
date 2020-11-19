import React, { Component } from 'react'

export default class New extends Component {
 constructor(props){
     super(props);
     this.state={
         image:['super-1.png'],
        email:this.props.value.email 
     }
 }
// state={
//     image:['super-1.png'],
//     email: 'i'        //   
// }

// componentDidUpdate(){
//     console.log(this.props.value.email);
//     this.state = this.props.value
    
// }
componentDidCatch(){
    console.log(this.props.value.email);
    this.setState({email:this.props.value.email});
}
 
    render() {
  console.log("Props: ",this.props);

        return (
            <div>
               <h1>Email : {this.state.email}</h1>
               <h1>Email1 : {this.props.value.email}</h1>
               <h1>myContent : {this.props.value.myContent}</h1>
               <h1>myFullName : {this.props.value.myFullName}</h1>
          {this.state.image.map((item) => (            
            <img src={'./images/'+item} alt="new"/>
           
          ))}
          <img src='./images/super-1.png' alt="new"/>

            </div>
        )
    }
}
