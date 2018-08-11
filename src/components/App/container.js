import React, { Component } from "react";
import data from "MOCK_DATA.json";
import App from "./presenter";

class Container extends Component {
    constructor() {
        super();
        this.state = {
          products: data,
          cart: [],
          quantity: 1,
          totalAmount: 0
        };
      };
    
    
    componentDidMount() {
    //cart state가 local storage에 있으면 불러오기
    let cart = localStorage.cart;
    if(cart) {
        this.setState(prevState => ({
        cart: JSON.parse(cart)
        }), function() {
        this.sumTotalAmount();
        })
    }
    };
    
    componentDidUpdate(prevProps, prevState) {
    if(prevState.cart !== this.state.cart) {
        localStorage.cart = JSON.stringify(this.state.cart);
    }
    }
    
    //장바구니에 선택한 물품을 추가하는 method
    handleAddToCart(selectedProducts) {
        let cartItem = this.state.cart;
        let productID = selectedProducts.id;
        if (this.checkProduct(productID)) {
        let index = cartItem.findIndex(item => {
            return item.id === productID;
        });
        cartItem[index].quantity += 1;
        this.setState({
            cart: cartItem
        });
        } else {
        cartItem.push(selectedProducts);
        this.setState({
            cart: cartItem,
            quantity: 1
        });
        }
    }

    //장바구니에 이미 제품이 있는지 확인하는 method
    checkProduct(id) {
        let cart = this.state.cart;
        return cart.some(item => {
        return item.id === id;
        });
    };

    // 장바구니에 담긴 물품들의 가격 총합을 구하는 method
    sumTotalAmount() {
        let cart = this.state.cart;
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
        if (cart[i].checked === true) {
            total += cart[i].price * Number(cart[i].quantity);
        }
        }
        this.setState({
            totalAmount: total
        });
    }
    render() {
        return (
            <App 
                checkProduct={this.checkProduct}
                sumTotalAmount={this.sumTotalAmount}
                renderFoodDetail={this.renderFoodDetail}
                handleAddToCart={this.handleAddToCart}
                checkProduct={this.renderFoodDetail}
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default Container;