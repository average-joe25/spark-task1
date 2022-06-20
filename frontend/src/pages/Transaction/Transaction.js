import React, { Component } from "react";
import { config } from "../../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import "./Transaction.css";

export default class Transaction extends Component {
  constructor() {
    super();
    this.state = {
      senderInput: 0,
      receiverInput: 0,
      senderName: "",
      receiverName: "",
      amount: 0,
      message: "",
      messageStatus: -1,
    };
  }

  senderId = async (event) => {
    this.setState({
      senderInput: event.target.value,
    });
    // console.log(event.target.value);
  };

  receiverId = async (event) => {
    this.setState({
      receiverInput: event.target.value,
    });
    // console.log(event.target.value);
  };

  amountInput = async (event) => {
    // console.log(event.target.value);
    this.setState({
      amount: event.target.value,
    });
  };

  apiCallSenderId = async () => {
    let response = {};
    let errored = false;
    try {
      response = await (
        await fetch(`${config.endpoint}/user/${this.state.senderInput}`)
      ).json();
    } catch (e) {
      errored = true;
    }

    if (errored) {
      this.setState({
        senderName: "Unable to fetch",
      });
      return;
    }

    if (response.user === undefined) {
      this.setState({
        senderName: "id must be 1 to 20",
      });
    } else {
      this.setState({
        senderName: response.user.name,
      });
    }
  };

  apiCallReceiverId = async () => {
    let response = {};
    let errored = false;
    try {
      response = await (
        await fetch(`${config.endpoint}/user/${this.state.receiverInput}`)
      ).json();
    } catch (e) {
      errored = true;
    }
    if (errored) {
      this.setState({
        receiverName: "Unable to fetch",
      });
      return;
    }

    if (response.user === undefined) {
      this.setState({
        receiverName: "id must be 1 to 20",
      });
    } else {
      this.setState({
        receiverName: response.user.name,
      });
    }
  };

  apiCallTransferMoney = async () => {
    var requestOptions = {
      method: "PATCH",
      redirect: "follow",
    };
    let response = {};
    let errored = false;
    try {
      response = await (
        await fetch(
          `${config.endpoint}/transaction?sendUser=${this.state.senderInput}&getUser=${this.state.receiverInput}&amount=${this.state.amount}`,
          requestOptions
        )
      ).json();
    } catch (e) {
      errored = true;
    }
    if (errored) {
      this.setState({
        message: "Unable to do transaction",
      });
      return;
    }
    if (response.code === 201) {
      this.setState({
        messageStatus: 1,
        message: response.message,
      });
    } else {
      this.setState({
        messageStatus: 0,
        message: response.message,
      });
    }
    // console.log(response, errored);
  };

  checkSenderId = async () => {
    // console.log(this.state.senderInput);
    await this.apiCallSenderId();
  };

  checkReceiverId = async () => {
    // console.log(this.state.receiverInput);
    await this.apiCallReceiverId();
  };

  transferMoney = async () => {
    await this.apiCallTransferMoney();
  };

  render() {
    return (
      <div className="transaction-container">
        {this.state.messageStatus === 0 && (
          <Alert severity="error">{this.state.message}</Alert>
        )}
        {this.state.messageStatus === 1 && (
          <Alert severity="success">Vola! {this.state.message}</Alert>
        )}
        <div className="sender-input">
          <h2 className="tran-div">Sender Id </h2>
          <div className="tran-div">
            <TextField
              id="outlined-textarea"
              label="Sender Id"
              placeholder="Ex: 1"
              multiline
              onChange={this.senderId}
            />
            <div>{this.state.senderName}</div>
          </div>
          <div className="tran-div">
            <Button
              variant="contained"
              className="tran-div"
              onClick={this.checkSenderId}
            >
              Check Name
            </Button>
          </div>
        </div>
        <div className="receiver-input">
          <h2 className="tran-div">Receiver Id </h2>
          <div className="tran-div">
            <TextField
              className="tran-div"
              id="outlined-textarea"
              label="Receiver Id"
              placeholder="Ex : 3"
              multiline
              onChange={this.receiverId}
            />
            <div>{this.state.receiverName}</div>
          </div>
          <div className="tran-div">
            <Button
              variant="contained"
              className="tran-div"
              onClick={this.checkReceiverId}
            >
              Check Name
            </Button>
          </div>
        </div>
        <div className="money-input">
          <h2 className="tran-div">Transaction Amount</h2>
          <div className="tran-div">
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.amountInput}
            />
          </div>
        </div>
        <Button
          variant="contained"
          className="tran-div"
          onClick={this.transferMoney}
        >
          Transfer Money
        </Button>
      </div>
    );
  }
}
