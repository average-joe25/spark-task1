import React from "react";

export const About = () => {
  return (
    <>
      <div className="columns notification m-2 mt-6 is-warning is-light is-centered is-vcentered is-box">
        <div className="column is-6 is-block mr-2">
          <p className="title is-size-3-touch is-size-1-desktop has-text-centered">
            Basic Banking System
          </p>
          <hr className="has-background-warning" />
          <p className="content has-text-justified mt-6">
          <b style={{fontSize:"1.4em"}}>◇</b> Create a simple dynamic website which has the following specs.<br/>

          <b style={{fontSize:"1.4em"}}>◇</b> Start with creating a dummy data in database for upto 10 customers. Database options: Mysql, Mongo, Postgres, etc. Customers table will have basic fields such as name, email, current balance etc. Transfers table will record all transfers happened.<br/>

          <b style={{fontSize:"1.4em"}}>◇</b> Flow: Home Page --{">"} View all Customers --{">"} Select and View one Customer --{">"} Transfer Money --{">"} Select customer to transfer to --{">"} View all Customers .<br/>

          <b style={{fontSize:"1.4em"}}>◇</b> No Login Page. No User Creation. Only transfer of money between multiple users.<br/>
          <b style={{fontSize:"1.4em"}}>◇</b> Host the website at 000webhost, github.io, heroku app or any other free hosting provider. Check in code in gitlab.
          </p>
        </div>
        <div className="column is-5 is-block mr-3">
          <figure className="image is-4by3">
            <img
              className="has-ratio"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFua3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt="Banking System"
            />
          </figure>
        </div>
      </div>
    </>
  );
};
