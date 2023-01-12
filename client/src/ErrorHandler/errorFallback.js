import React from "react";
import "./error.css";
import Error from "../media/error.png";

export default function errorFallback(){
    return(
        <div className="fallback-error">
        <div className="error-info">
        <img src={Error} alt="Error" className="error-img"></img>
        <h2 className="error-tagline">Sorry! Some Error Occurred :(</h2>
        <h4 className="error-desc">We are working on it, please revisit later.</h4>
        </div>
        </div>
    );
}