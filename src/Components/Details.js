import React from "react";
import { Link } from "react-router-dom";

export const Details = (props) => {
  return (
    <>
      <Link
        to="/customer-details"
        className="column is-12 table my-0 is-hover"
        data-acc={props.customer.Account_No}
        style={{textDecoration:"none"}}
        onClick={(e) => {
          props.setCurrentCustomer(e.target.dataset.acc);
        }}
      >
        <div
          className="columns has-text-centered is-mobile p-0"
          data-acc={props.customer.Account_No}
        >
          <div
            className="column is-3 px-0"
            data-acc={props.customer.Account_No}
            style={{textDecoration:"underline",color:"blue"}}
          >
            <h3
              className="title is-size-7-touch is-size-4-desktop mt-4"
              data-acc={props.customer.Account_No}
            >
              {props.customer.Account_No}
            </h3>
          </div>
          <div
            className="column is-3 px-0"
            style={{textAlign:"center"}}
          >
            <h3
              className="title is-size-7-touch mt-4 ml-2 is-size-4-desktop"
            >
              {props.customer.name}
            </h3>
          </div>
          <div
            className="column is-4 px-0"
            data-acc={props.customer.Account_No}
          >
            <h3
            style={{fontSize:"1em"}}
              className="title mt-4 is-size-7-touch is-size-4-desktop"
              data-acc={props.customer.Account_No}
            >
              {props.customer.email}
            </h3>
          </div>
          <div
            className="column is-2 px-0"
            data-acc={props.customer.Account_No}
          >
            <h3
              className="title mt-4 is-size-7-touch is-size-4-desktop"
              data-acc={props.customer.Account_No}
            >
              ₹{props.customer.balance}
            </h3>
          </div>
        </div>
      </Link>
      <div className="column is-12 my-0 py-0">
        <hr className="has-background-dark" />
      </div>
    </>
  );
};
