import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { config } from "../../App";
import Button from "@mui/material/Button";
import "./UserById.css";

const UserById = () => {
  let { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const data = await (await fetch(`${config.endpoint}/user/${id}`)).json();
      setUserData(data);
      console.log(data);
    };
    fetchUser();
  }, [id]);
  return (
    <div className="userbyid-container">
      <div className="userbyid-btn">
        <Link to="/allusers" className="userbyid-btns">
          <Button variant="contained">Go Back</Button>
        </Link>
        <Link to="/" className="userbyid-btns">
          <Button variant="contained">Home</Button>
        </Link>
      </div>
      {userData.user !== undefined && (
        <div className="user-card-container">
          <div className="user-card-id">Id : {userData.user.userid}</div>
          <div className="user-card-name">Name: {userData.user.name}</div>
          <div className="user-card-email">Email: {userData.user.email}</div>
          <div className="user-card-balance">Balance</div>
          <h1 className="user-card-amount">Rs. {userData.user.balance}</h1>
        </div>
      )}
    </div>
  );
};

export default UserById;
