import React from "react";
import "./paymentForm.css";

export default function PaymentForm(){
    return(
        <div className="payment-form">
        <div className="wrapper">
        <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <label>Product: </label>
            <input className="disable-cursor" type="text" placeholder="Product" readOnly={true}></input>
            <label>Product ID: </label>
            <input className="disable-cursor" type="text" placeholder="Product ID" readOnly={true}></input>
            <label>Amount: </label>
            <input className="disable-cursor" type="number" placeholder="Amount" readOnly={true}></input>
            <button type="submit">Pay</button>
        </form>
        </div>
        <div className="powered">
            Powered by RECODEPAY
        </div>
        </div>
    );
}