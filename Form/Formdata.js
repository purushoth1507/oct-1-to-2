// import React from "react";
// import "../colors.css";
// import axios from "axios";
// import UserForm from "./UserForm/formpage";
// import Userlist from "./Userlist/listpage";
// class Formdata extends React.Component {
//     constructor(props) {
//         super(props)


//         this.state = {
//             tableDatalist: [{
//                 name: "goku",
//                 dob: "12/09/2009",
//                 email: "goku@gmail.com",
//                 phone: 987654333,
//                 address: "auston 766776"
//             }],
//         }  
//     }


//     handleGetobj = (data) => {
//         // this.state.tableDatalist.push(data);
//         // this.setState({ tableDatalist: this.state.tableDatalist }) 
//         axios.get('https://jsonplaceholder.typicode.com/users/')
//              .then((response) => {
//                 // handle success  
//                 this.setState({tableDatalist:response.data});
//                 console.log(response); 
//             })
//             .catch((error) => {
//                 // handle error
//                 console.log(error);
//             })
//     }    

//      handleDelete=(d)=>{
//         axios.delete('https://jsonplaceholder.typicode.com/users/'+d.id)
//              .then((response) => {
//                 // handle success  
//                 this.handleGetobj();
//             })
//             .catch((error) => {
//                 // handle error
//                 console.log(error);
//             })

//      }

//       componentDidMount() {

//         this.handleGetobj();
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-sm-6">
//                         <UserForm getUserform={this.handleGetobj} />
//                     </div>

//                     <div className="col-lg-6 col-sm-6">
//                         <Userlist tableDatalist={this.state.tableDatalist} handleDelete={this.handleDelete}/>
//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }
// export default Formdata;     

import { useEffect, useState } from "react";
import UserForm from "./UserForm/formpage";
import Userlist from "./Userlist/listpage";
import axios from "axios";
function Formdata(){
  
 
 const[tableDatalist,settableDatalist]=useState([])
     
 useEffect(()=>{
    handleGetobj()

   },[])

  const handleGetobj = () => {
            // this.state.tableDatalist.push(data);
            // this.setState({ tableDatalist: this.state.tableDatalist }) 
            axios.get('https://jsonplaceholder.typicode.com/users/')
                 .then((response) => {
                    // handle success  
                    settableDatalist(response.data);
                    console.log(response); 
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                })
        }    
    return(
      <div className="container">
                <div className="row">
                     <div className="col-lg-6 col-sm-6">
                        <UserForm getUserform={handleGetobj} />
                     </div>

                     <div className="col-lg-6 col-sm-6">
                         <Userlist tableDatalist={tableDatalist}/>
                     </div>
                 </div>

             </div>
    )
}

export default Formdata


