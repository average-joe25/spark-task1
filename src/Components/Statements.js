import React from "react";

export const Statements = (props) => {
  return (
    <>
      <div className="column is-12 table my-0">
        <div className="columns has-text-centered is-mobile">
          <div className="column is-3">
            <h6 className="title is-size-7-touch is-size-5-desktop">
              {props.statements.date}
            </h6>
          </div>
          <div className="column is-7">
            <h6 className="title is-size-7-touch is-size-5-desktop">
              Transferred to the account <b>{props.statements.Credited_name}({props.statements.Credited_by})</b> by the
              account <b>{props.statements.Debated_name}({props.statements.Debated_to})</b>
            </h6>
          </div>
          <div className="column is-2">
            <h6 className="title is-size-7-touch is-size-5-desktop">
              ₹{props.statements.amount}
            </h6>
          </div>
        </div>
      </div>
      <div className="column is-12 my-0 py-0">
        <hr className="has-background-dark" />
      </div>
    </>
  );
};
