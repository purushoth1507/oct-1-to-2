import React from "react";

class Propsmethos extends React.Component {


    render() {
        return (
            
                    
                        <div class="card">
                            <img src={this.props.picture} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{this.props.title}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class={this.props.bname}>{this.props.button}</a>
                            </div>
                            
                        </div> 
                        
                    
        )
    }
}

export default Propsmethos;