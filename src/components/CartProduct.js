import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartProduct extends Component {

  render() {
    let {
      cartProduct,
      deleteFromBasket,
      removeFromBasket,
      addToMyCart
    } = this.props;
    const { product } = cartProduct;
    return (
      <React.Fragment>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img
                  src={product.img_url}
                  alt={product.name}
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-10">
                <Link to={product}>
                  <h4 className="nomargin">{product.name}</h4>
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          </td>
          <td data-th="Price">${product.price}</td>
          <td data-th="Quantity">
            <div class="def-number-input number-input safari_only" style={{border: '1px solid black'}}>
              <button class="minus" onClick={() => removeFromBasket(product)} />
              <input
                class="quantity"
                min="0"
                name="quantity"
                value={cartProduct.quantity}
                type="number"
               />
              <button class="plus" onClick={() => addToMyCart(product)} />
            </div>
          </td>
          <td data-th="Total" className="text-center">
            ${product.price * cartProduct.quantity}
          </td>
          <td className="actions" data-th="">
            <button className="btn btn-danger btn-sm">
              <h4
              onClick={() => deleteFromBasket(product)}
              >DELETE</h4>
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CartProduct;
