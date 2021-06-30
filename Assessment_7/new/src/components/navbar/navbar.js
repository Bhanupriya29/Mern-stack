import React, { Component } from "react";
import "./navbar.css";
import { Router, Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <nav className="navbar p-3 mb-2 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mr-3">
          Api App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <router>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="r"></div>
          <div className="navbar-buttons ml-auto">
            <Link to="/login">
              <button className="btn btn-danger mr-2" type="submit">
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp; Login
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="btn btn-warning mr-2" type="submit">
                <i class="fa fa-pencil" aria-hidden="true"></i>&nbsp; AboutUs
              </button>
            </Link>
            <Link to="/home">
              <button className="btn btn-success mr-2" type="submit">
                <i class="fa fa-home" aria-hidden="true"></i>&nbsp; Home
              </button>
            </Link>

           <Link to="/view">
              <button className="btn btn-success mr-2" type="submit">
                <i class="fa fa-car" aria-hidden="true"></i>&nbsp; TourPackages
              </button>
            </Link>

           
          </div>
        </div>
        </router>
      </nav>
    );
  }
}

export default Navbar;