import React, { Fragment } from "react";
import Propsmethos from "./Propsmethos";
class Secondr extends React.Component {

    render() {
        return (

            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <Propsmethos bname="btn btn-danger" button="BUY" title="TV Monitor" picture="https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70" />
                        </div>
                        <div className="col-2">
                            <Propsmethos title="Laptop" />
                        </div>
                        <div className="col-2">
                            <Propsmethos title="Mobiles" />
                        </div>
                        <div className="col-2">
                            <Propsmethos title="mouse" />
                        </div>
                        <div className="col-2">
                            <Propsmethos title="keyboard" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Secondr;