import React from "react";
import { NavLink } from "react-router-dom";

// import Search from "./Search";

const Navbar = props => (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top" style={{backgroundColor:'white'}}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://www.clipartkey.com/mpngs/m/30-308184_transparent-farmer-png-farmer-icon-png.png"
            alt="logo"
            style={{height: '15vh', marginTop:'20px'}}
            
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
        <h1 style={{fontSize: '5rem', marginLeft:'200px', marginTop: '40px', fontWeight: '900', color: 'red',textShadow: '2px 2px 4px #000000' }}>Nathans Farm</h1>
          <ul className="navbar-nav ml-auto" style={{marginTop:'60px', fontSize: '1.5rem'}}>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
                <span className="sr-only">current</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/checkout"
                // className="nav-link fa fa-shopping-basket"
                style={{marginTop: '-.1rem'}}
              >
                                <h4>CART</h4>

                <span>{props.basket.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

export default Navbar;
