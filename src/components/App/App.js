import React, { useState } from "react";
import Card from "../Card/Card";
import ThankYou from "../Thank you/ThankYou";
import "./App.scss";

function App() {
  const [tooglePage, setTogglePage] = useState(false);

  // const getNumber = (number) => {
  //   return number;
  // };

  const handleClick = () => {
    setTogglePage(true);
  };

  return <>{tooglePage ? <ThankYou /> : <Card toggle={handleClick} />}</>;
}

export default App;
