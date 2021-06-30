import React, { Component } from "react";
import "./navbar.css";
import {Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
      return(
          <footer className="bg-dark text-center text-white">
          <div className="container">
              <h3>Footer</h3>
          </div>
          </footer>
      )
  }
}