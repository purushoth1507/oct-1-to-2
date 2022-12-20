import React from "react";
import SimpleReactValidator from 'simple-react-validator';

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.validator = new SimpleReactValidator();
    

        this.state = {
            objHead: {   
                name: "",
                dob: "",
                email: "",
                phone: "",
                address: ""
            },
        }
    }
        handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({
                objHead: {
                    ...this.state.objHead,
                    [name]: value

                }
            })

        }   

        handleSubmit = () => {
            if (this.validator.allValid()) {
                this.props.getUserform(this.state.objHead)
            }
            else {
                this.validator.showMessages();
                this.forceUpdate();
            
            }

        }


        render(){
            return (  
                <div>
                    <h4>userform</h4>
                    <div className="row">
                        <div className="col-sm-6 ">
                            <input type="text" name="name" value={this.state.objHead.name} onChange={this.handleInput} className="form-control" placeholder="name" />
                            {this.validator.message("name", this.state.objHead.name, "required|alpha|min:6|max:10")}
                        </div>
                        <div className="col-sm-6 ">
                            <input type="date" name="dob" value={this.state.objHead.dob} onChange={this.handleInput} className="form-control" placeholder="DoB" />
                            {this.validator.message("dob", this.state.objHead.dob, "required")}
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-6 ">
                            <input type="email" name="email" value={this.state.objHead.email} onChange={this.handleInput} className="form-control" placeholder="Email" />
                            {this.validator.message("email", this.state.objHead.email, "required|email")}
                        </div>
                        <div className="col-6">
                            <input type="number" name="phone" value={this.state.objHead.phone} onChange={this.handleInput} className="form-control" placeholder="Phone" />
                            {this.validator.message("phone", this.state.objHead.phone, "required|numeric|min:10|max:10")}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="text" name="address" value={this.state.objHead.address} onChange={this.handleInput} className="form-control" placeholder="address" />
                            {this.validator.message("address", this.state.objHead.address, "required|string")}
                        </div>
                    </div>
                    <div className="col-2">
                        <button onClick={this.handleSubmit} className="btn btn-primary" type="submit">Submit</button>
                    </div>

                </div>
            )
        }
    } 

export default UserForm;