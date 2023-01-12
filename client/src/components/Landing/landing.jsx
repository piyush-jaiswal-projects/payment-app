import React from "react";

import "./landing.css";
import Poverty from "../../media/poverty.jpg";

export default function Landing(){
    return(
        <div className="landing-sec">
        <div className="info-div">
        <h1>CHANGE THE LIFE OF THOSE
        <br></br>
        WHO HAVE NO <b className="yellow">HOPE</b></h1>
        <button className="donate-btn">Donate</button>
        </div>
        <img src={Poverty} alt="Poverty" className="poverty-img"></img>
        </div>
    );
}