import React from "react";
import { Link } from 'react-router-dom';

const Main = props => {
    if(props.products) {
        return <RenderProducts products={props.products}/>
    } else {
        return <RenderLoading />
    }
}

const RenderProducts = props => {
    return props.products.map((product) => {
        return (
          <div className="product">
            <Link className="productImg" to={`/item/${product.id}`}><img src={product.image} alt="food"/></Link>
            <div className="productName">
              <p className="productTitle">{product.name}</p>
            </div>
            <hr />
            <p className="productPrice">{product.price.toLocaleString()} 원</p>
          </div>
        );
    })
};

const RenderLoading = props => (
    <div>Loading...</div>
);

export default Main;