import React, { Fragment } from "react"; 
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
import Formdata from "./Form/Formdata";

class Firstr extends React.Component{

 state={
   count:0   
 }

  handleCount=()=>{
  
   this.setState({count:this.state.count+1})

   }

   render(){    

    return(
    <Fragment id="button">
        {/* <h4>Numbers{this.state.count}</h4>  

        {/* <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> */}

        {/* <button onClick={this.handleCount}>+</button>{"    "}
        <button onClick={this.handleCount}>-</button>
       */}
      <Formdata/> 
     
   </Fragment>
    )
   }
} 

export default Firstr