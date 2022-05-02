import React from "react";
import svg from "../../images/illustration-thank-you.svg";
import Card from "../Card/Card";
import "./index.scss";

const ThankYou = () => {
  // export const getNumber = (number) => {
  //   return number;
  // }

  // console.log(num)

  return (
    <div className="card">
      <div className="container">
        <img src={svg} alt="svg" />
        {/* <p>{`You have selected ${selectedNumber} out of 5`}</p> */}
        <p>Thank you!</p>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont' hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
