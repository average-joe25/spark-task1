import React from "react";

export const CustomerStatements = (props) => {
  return (
    <>
      <div className="column is-12 table my-0">
        <div className="columns has-text-centered is-mobile p-0">
          <div className="column is-2">
            <h6 className="title is-size-7-touch is-size-4-desktop">
              {props.statements.date}
            </h6>
          </div>
          <div className="column is-6">
            {props.user == props.statements.Credited_by ? (
              <h6 className="title is-size-7-touch is-size-5-desktop">
                Transferred to the account {props.statements.Credited_name}({props.statements.Debated_to})
              </h6>
            ) : (
              <h6 className="title is-size-7-touch is-size-5-desktop">
                Received from the account {props.statements.Debated_name}({props.statements.Credited_by})
              </h6>
            )}
          </div>
          <div className="column is-2">
            {props.user == props.statements.Debated_to ? (
              <h6 className="title is-size-7-touch is-size-4-desktop">
                ₹{props.statements.amount}
              </h6>
            ) : (
                <h6 className="title is-size-7-touch is-size-4-desktop">
                -
              </h6>
            )}
          </div>
          <div className="column is-2">
            
          {props.user == props.statements.Credited_by ? (
              <h6 className="title is-size-7-touch is-size-4-desktop">
                ₹{props.statements.amount}
              </h6>
            ) : (
                <h6 className="title is-size-7-touch is-size-4-desktop">
                -
              </h6>
            )}
          </div>
        </div>
      </div>
      <div className="column is-12 my-0 py-0">
        <hr className="has-background-dark" />
      </div>
    </>
  );
};
