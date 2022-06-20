import "./App.css";
import "bulma/css/bulma.min.css";
import logo from "./public_image/bank.jpeg";
import { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { BeatLoader,ScaleLoader,HashLoader } from "react-spinners";

import axios from "axios";

import Header from "./Components/Header";
import Home from "./Components/Home";
import { Footer } from "./Components/Footer.js";
import { CustomersDetails } from "./Components/CustomersDetails";
import { TransactionHistory } from "./Components/TransactionHistory";
import { TransferAmount } from "./Components/TransferAmount";
import { CustomerDetail } from "./Components/CustomerDetail";
import { About } from "./Components/About";

function App() {
  //customersDetails
  const [customersDetails, setCustomersDetails] = useState([]);

  // loader
  const [Customerloading, setCustomerLoading] = useState(false);
  const [transactionloading, setTransactionLoading] = useState(false);

  //fetching the customersDetails
  useEffect(() => {
    async function fetchCustomersDetails() {
      try {
        const data = await axios.get(
          "https://clone-twitter-by-vaibhav.herokuapp.com/customers"
        );
        setCustomersDetails(data.data.msg);
        setCustomerLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCustomersDetails();
  }, [customersDetails]);

  //transactionDetails
  const [transactionDetails, setTransactionDetails] = useState([]);

  //fetching the transaction details
  useEffect(() => {
    async function fetchTransactionDetails() {
      try {
        const transactionData = await axios.get(
          "https://clone-twitter-by-vaibhav.herokuapp.com/transactions"
        );
        setTransactionDetails(transactionData.data.msg);
        setTransactionLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTransactionDetails();
  }, [transactionDetails]);

  // transfer parameters
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  var data = {
    from: parseInt(from),
    to: parseInt(to),
    amount: parseInt(amount),
  };

  // Transfer event handler
  useEffect(()=>{
    data.from=parseInt(from);
    data.to= parseInt(to);
    data.amount= parseInt(amount);
    console.log(from,to,amount)
  },[to,from])
  const handleTransfer = async (e) => {
    e.preventDefault();

    if (to && from && amount > 0 && to !== from) {
      var processes = document.querySelector("#transfer");
      processes.classList.add("is-loading");

      try {
        const transfer = await axios.put(
          `https://clone-twitter-by-vaibhav.herokuapp.com/customers/${parseInt(from)}&${parseInt(to)}`,
          {
            amount: parseInt(amount),
          }
        );
        if (transfer.status === 200 && transfer.data.message) {
          const response = await axios.post(
            "https://clone-twitter-by-vaibhav.herokuapp.com/transactions",
            data
          );
          if (response.status === 200) {
            processes.classList.remove("is-loading");
            alert(" Transfer Done Successfully !!");
          } else {
            processes.classList.remove("is-loading");
            alert(" Transfer Failed, Try again!!");
          }
        } else {
          processes.classList.remove("is-loading");
          alert(transfer.data.message + " !!");
        }
      } catch (err) {
        processes.classList.remove("is-loading");
        alert(" Internal Error occurred, Try again after few minutes!!");
      }
    } else {
      alert("Invalid Amount. Please try!!");
    }

    setFrom("");
    setTo("");
    setAmount("");
  };

  // customer variables
  const [currentCustomer, setCurrentCustomer] = useState("");

  // transfer state
  const [transfer, setTransfer] = useState("Transfer From");

  useEffect(() => {
    if (transfer !== "Transfer From") {
      setFrom(transfer);
    }
  }, [transfer]);

  return (
    <>
      <HashRouter>
        {!transactionloading && !Customerloading ? (
          <>
            <div
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                top: "15vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img style={{height:"25em",width:"30em"}} src={logo} alt="logo" />
              <div style={{ display: "flex",marginBottom:"4em" }}>
                <HashLoader loading color="#daa520" size={100} width={2} margin={20} />
              </div>
            </div>
          </>
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/customs-details">
                <CustomersDetails
                  customersDetails={customersDetails}
                  setCurrentCustomer={setCurrentCustomer}
                  currentCustomer={currentCustomer}
                />
              </Route>
              <Route exact path="/transaction-statements">
                <TransactionHistory
                  transactionDetails={transactionDetails}
                />
              </Route>
              <Route exact path="/transfer-amount">
                <TransferAmount
                  customersDetails={customersDetails}
                  to={to}
                  from={from}
                  setTo={setTo}
                  setAmount={setAmount}
                  setFrom={setFrom}
                  amount={amount}
                  handleTransfer={handleTransfer}
                />
              </Route>
              <Route exact path="/customer-details">
                <CustomerDetail
                  customersDetails={customersDetails}
                  currentCustomer={currentCustomer}
                  transactionDetails={transactionDetails}
                  setTransfer={setTransfer}
                />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </HashRouter>
    </>
  );
}

export default App;
