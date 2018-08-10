import React from "react";
import "./Cart.css";

class Cart extends React.Component {
    render() {
        let cart = this.props.cart;
        return (
            <div>
                {cart.map(item => {
                    return <RenderCart item={item} key={item.id} />
                })}
            </div>
        );
    }
}

const RenderCart = props => (
    <div className="itemContainer">
        <img src={props.item.image} alt={props.item.name} />
        {props.item.name}
    </div>
);

export default Cart;