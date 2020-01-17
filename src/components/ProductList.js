import React, { Component } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import CreatePost from './CreateProduct'

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 style={{margin:'auto', position:'relative', width:'fit-content', marginTop: '30px', marginBottom: '30px', fontSize: '3rem'}}>
            PRODUCTS
            </h1>
        </div>
        <div className="container">
        <CreatePost />

          <div className="row">
            {this.props.products.map(product => (
              <Product
                key={product.id}
                product={product}
                addToMyCart={this.props.addToMyCart}
                viewDetails={this.props.viewDetails}
              

              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;

