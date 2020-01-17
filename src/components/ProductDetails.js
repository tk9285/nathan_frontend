import React from "react";
// import Product from "./Product";
import { Link } from "react-router-dom";

const ProductDetails = props => {
  const { product, addToMyCart } = props;
  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img alt="" src={product.img_url} />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img alt="" src={product.backurl} />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <Link data-target="#pic-1" data-toggle="tab">
                    <img alt="" src={product.img_url} />
                  </Link>
                </li>
                <li>
                  <Link data-target="#pic-2" data-toggle="tab">
                    <img alt="" src={product.backurl} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title" style={{margin:'0 auto', position:'relative', width:'fit-content', fontSize:'3rem', marginTop:'40px', fontWeight:'bold'}}>{product.name}</h3>


              <div id="accordion">
                <div className="card" style={{marginTop:'25px'}}>
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        PRODUCT DETAILS
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                    <p className="product-description">{product.description}</p>

                    </div>
                  </div>
                </div>
              </div>





              <h3 className="price" style={{marginLeft:'20px'}}>
                current price: <span>${product.price}</span>
              </h3>
              <div className="action" style={{marginLeft:'20px'}}>
                <button
                  className="add-to-cart btn btn-default"
                  type="button"
                  onClick={event => {
                    event.preventDefault();
                    addToMyCart(product);
                  }}
                  style={{border: '1px solid black'}}
                >
                  add to cart
                </button>
                {/* <Link to="/products">
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-arrow-left" />
                  </button>
                </Link> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

//TODO
//On the button "Go Back" create the event onClick={() => props.history.pus('/products')}
//You could also use <link> => <Link to='/products'><button>Go Back<button></link>
