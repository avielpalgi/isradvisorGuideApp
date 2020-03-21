import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../Css/Hobbies.css';
class HobbieAdded extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="CardItem">
            <img  className="CardImage"  variant="top"  src={this.props.item.image} />
                    <h4>{this.props.item.name}</h4>
                    <div className='del'>
                            <span className='delSpan fas fa-remove fa-2x' onClick={() => this.props.removeFromCart(this.props.item)}></span>
                        </div>
            </div>
        );
    }
}

export default HobbieAdded;