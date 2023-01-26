import React from "react";
import "./companyInfo.css";
import Logo from "../../media/icon.png";

export default function CompanyInfo(){
    return(
        <>
        <div className="company-info">
        <div className="logo">
        <img src={Logo} alt=" "></img>
        </div>
        <div className="name">
        <h2>RECODEPAY</h2>
        </div>
        </div>
        <hr className="hr"></hr>
        </>
    );
}