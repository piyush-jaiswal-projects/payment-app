import React from "react";
import "./landing.css";
import PaymentForm from "../PaymentForm/paymentForm";
import BackgroundImg from "../../media/bg2.jpg";

export default function Landing(){
    return(
        <div className="landing-sec">
        <div className="form"><PaymentForm /></div>
        <div className="bg-layer"></div>
        <div className="background">
            <img src={BackgroundImg} alt=" "></img>
        </div>
        </div>
    );
}