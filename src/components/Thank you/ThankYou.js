import React from "react";
import svg from "../../images/illustration-thank-you.svg";
import "./index.scss";

const ThankYou = ({ selectedNumber }) => {
  return (
    <div className="card">
      <div className="thank-you-container">
        <img className="thank-you-svg" src={svg} alt="svg" />
        <p className="selection" >{`You selected ${selectedNumber} out of 5`}</p>
        <p className="ty">Thank you!</p>
        <p className="appreciation">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont' hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
