import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "components/Nav/Nav";
import Cart from "components/Cart/Cart";
import Main from "components/Main/Main";
import Item from "components/Item/Item";


class App extends Component {
    
    //제품을 map함수를 이용해 렌더링한다.
    renderFoodDetail() {
        return this.props.products.map(product => {
        return (
            <Route
            exact
            path={`/item/${product.id}`}
            render={props => {
                return (
                <Item
                    addToCart={this.props.handleAddToCart}
                    productQuantity={this.props.quantity}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                />
                );
            }}
            />
        );
        });
    }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Main
                  products={this.props.products}
                />
              );
            }}
          />
          <Route
            exact
            path="/cart"
            render={props => {
              return (
                <Cart
                  cart={this.props.cart}
                  totalAmount={this.props.totalAmount}
                />
              );
            }}
          />
          {this.renderFoodDetail()}
        </Switch>
      </div>
    );
  };
};


export default App;
