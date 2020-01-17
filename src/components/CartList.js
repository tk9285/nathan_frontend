import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

class CartList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Product</th>
                <th style={{ width: "10%" }}>Price</th>
                <th
                  style={{
                    width: "8 %"
                  }}
                >
                  Quantity
                </th>
                <th style={{ width: "22%" }} className="text-center">
                  Total
                </th>
                <th style={{ width: "10%" }} />
              </tr>
            </thead>
            <tbody>
              {this.props.basket.length === 0 ? (
                <div class="alert alert-danger large" role="alert" style={{width:'200%', backgroundColor:'white', border:'1px solid black', color: 'black'}}>
                  Your cart is empty
                </div>
              ) : (
                this.props.basket.map(cartProduct => (
                  <CartProduct
                    cartProduct={cartProduct}
                    deleteFromBasket={this.props.deleteFromBasket}
                    removeFromBasket={this.props.removeFromBasket}
                    addToMyCart={this.props.addToMyCart}
                    calculateTotalCost={this.calculateTotalCost}
                    changeQuantity={this.changeQuantity}
                  />
                ))
              )}
            </tbody>
            <tfoot>

                <td>
                  <Link to="/products">
                    <h4 style={{color:'white', backgroundColor: 'green', textAlign:'center',paddingTop:'.25em', border:'1px solid black', width:'30%', height:'2em', borderRadius:'5px', }}>Continue Shopping</h4>
                  </Link>
                </td>
                <td colSpan="2" className="hidden-xs" />
                <td className="hidden-xs text-center">
                  <strong> {this.props.cartProduct}</strong>
                </td>
                <td style={{marginRight: '200px'}}>
                  <Link to="/">
                    <h4 style={{color:'white', backgroundColor: 'green', textAlign:'center',paddingTop:'.25em', border:'1px solid black', width:'90%', height:'2em', borderRadius:'5px'}}>Checkout</h4>
                  </Link>
                </td>
              
            </tfoot>
            
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default CartList;
