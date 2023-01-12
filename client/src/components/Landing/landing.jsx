import React from "react";

import "./landing.css";
import Poverty from "../../media/poverty.jpg";

export default function Landing(){
    return(
        <div className="landing-sec">
        <img src={Poverty} alt="Poverty" className="poverty-img"></img>
        </div>
    );
}