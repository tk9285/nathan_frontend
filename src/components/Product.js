import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import CreatePost from './CreateProduct';
import axios from 'axios'


// export default class Product extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name:"",
//       description:"",
//       price:"",
//       img_url
//     }
//   }

// }






const Product = props => {
  const { product, addToMyCart, viewDetails } = props;

  // handleDelete = async id => {
  //   await axios.delete(`http://localhost:3000/products/${id}`)
  // }

  return (
    <>
      {/* <button onClick={() =>
      {handleDelete(product.id)}}        
      >DELETE
      </button> */}
      <div
        className="col-md-3 col-sm-6"
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          viewDetails(product);
        }}
      >

        <Link to={`/products/${product.id}`}>
          <div className="product-grid4">
            <div className="product-image4">
              <NavLink to="#">
                <img alt="" className="pic-1" src={product.img_url} />
                <img alt="" className="pic-2" src={product.backurl} />
              </NavLink>
            </div>
            <div className="product-content">
              <div className="title">
                <NavLink to="#" style={{ fontWeight: 'bold', fontSize: '2rem' }}>{product.name}</NavLink>
                <h3 className="product-info">Product Details</h3>

              </div>
              <div className="price">Price ${product.price}</div>
              <NavLink
                className="add-to-cart"
                to=""
                onClick={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  addToMyCart(product);
                }}
              >
                ADD TO CART
            </NavLink>
            </div>

          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
