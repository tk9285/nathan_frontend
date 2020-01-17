// import PropTypes from "prop-types";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const HomePage = props => (
  <React.Fragment>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://blog.ed.gov/files/2019/08/AdobeStock_221344370.jpeg"
            alt="Main"
            style={{ position: 'relative', height: '80vh' }}
          />
          <div style={{ position: 'absolute', bottom: '50%', right: '25%' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '900', color: 'red',textShadow: '2px 2px 4px #000000' }}>FRESH</h1>
            <h1 style={{ fontSize: '4rem', fontWeight: '900', color: 'red',textShadow: '2px 2px 4px #000000'  }}>ORGANIC</h1>
            <h1 style={{ fontSize: '4rem', fontWeight: '900', color: 'red',textShadow: '2px 2px 4px #000000'  }}>PRODUCE</h1>
          </div>
        </div>
        {/* <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
            alt="Second"
            style={{ position: 'relative', height: '80vh' }}

          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Third"
            style={{ position: 'relative', height: '80vh' }}
          />
        </div> */}
      </div>
      {/* <Link
        className="carousel-control-prev"
        to="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next"
        to="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </Link> */}
    </div>
    <hr className="half-rule" />
    <div className="container">
      <div className="row">
        <div className="col-sm">

          <NavLink className="nav-link" to="/products">
            <img
              className="d-block w-100"
              src="https://img1.cookinglight.timeinc.net/sites/default/files/1502826406/1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg"
              alt="Third slide"
              style={{height:'30vh', position:'relative'}}
            />
            <div className='aviato' style={{border: '1px solid black', position:'relative', bottom:'9em', textAlign:'center', backgroundColor:'white'}}> 
              <h2 style={{margin:'auto', justifySelf:'center'}}>
                FRESH FRUITS
              </h2>
            </div>
          </NavLink>
        </div>
        <div className="col-sm">
          <NavLink className="nav-link" to="/products">
            <img
              className="d-block w-100"
              src="https://livingonthecheap.com/lotc-cms/wp-content/uploads/2016/07/How-to-keep-summer-veggies-fresh-to-avoid-food-waste.jpg"
              alt="Third slide"
              style={{height:'30vh'}}
            />
             <div className='aviato' style={{border: '1px solid black', position:'relative', bottom:'9em', textAlign:'center', backgroundColor:'white'}}> 
              <h2 style={{margin:'auto', justifySelf:'center'}}>
                FRESH VEGETABLES
              </h2>
            </div>
          </NavLink>
        </div>
        <div className="col-sm">
          <NavLink className="nav-link" to="/products">
            <img
              className="d-block w-100"
              src="https://img.112.international/original/2019/07/26/284833.jpg"
              alt="Third slide"
              style={{height:'30vh'}}
            />
             <div className='aviato' style={{border: '1px solid black', position:'relative', bottom:'9em', textAlign:'center', backgroundColor:'white'}}> 
              <h2 style={{margin:'auto', justifySelf:'center'}}>
                DAIRY PRODUCTS
              </h2>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    <hr className="half-rule" />

    {/* ------------------footer---------------------------------- */}

    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  About
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Team
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Information</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  About
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Team
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-double-right" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-instagram" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fa fa-google-plus" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" target="_blank">
                  <i className="fa fa-envelope" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <Link to="#">NATHANS FARM INC</Link>
              </u>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default HomePage;
