import React from "react"; 

class Userlist extends React.Component{

    render(){
        return(
            <div>
                <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">name</th>
                                <th scope="col">DoB</th>
                                <th scope="col">Email</th>
                                <th scope="col">phone</th>
                                <th scope="col">address</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props?.tableDatalist?.map((pass, i) =>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{pass.name}</td>
                                    <td>{pass.id}</td>
                                    <td>{pass.email}</td>
                                    <td>{pass.phone}</td>
                                    <td><button onClick={()=> this.props.handleDelete(pass)}>delete</button></td>
                                    {/* <td>{pass.address}</td> */}
                                </tr>
                            )}
                        </tbody>
                    </table>
            </div>
        )
    }
} 

export default Userlist;