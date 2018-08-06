import React, { Component } from "react";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: {} 
        };
    };

    addToCart(image, name, price, id,  quantity, checked) {
        this.setState({
          selectedProduct: {
            image: image,
            name: name,
            price: price,
            id: id,
            quantity: quantity,
            checked: checked
          }
        }, function() {
          this.props.addToCart(this.state.selectedProduct);
        })
    };

    render() {
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.props.productQuantity;
        return (
            <div className="container"> 
                <img 
                    className="itemImage" 
                    src={this.props.image} 
                    alt={this.props.name} 
                />
                {this.props.name}
                <div className="itemPrice">{this.props.price}</div>
                <button color="primary" onClick={this.addToCart.bind(this, image, name, price, id, quantity)}>장바구니에 담기</button>
            </div>
        );
    };
}

export default Item;