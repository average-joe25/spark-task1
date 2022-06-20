import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./HomePage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="home-page-container">
        <h1>Welcome To The Spark Foundation</h1>
        <h2>Online Banking System</h2>
        <h3>Our Services</h3>
        <div className="home-page-btn">
          <Link to="/allusers" className="btn-home-page">
            <Button variant="contained">All Users</Button>
          </Link>
          <Link to="transaction" className="btn-home-page">
            <Button variant="contained" color="success">
              Do Transaction
            </Button>
          </Link>
          <Link to="/alltransactions" className="btn-home-page">
            <Button variant="contained">All Transactions</Button>
          </Link>
        </div>
      </div>
    );
  }
}
