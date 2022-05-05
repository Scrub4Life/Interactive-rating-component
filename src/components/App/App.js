import React, { useState } from "react";
import Card from "../Card/Card";
import ThankYou from "../Thank you/ThankYou";
import "./App.scss";

function App() {
  // toggles the page
  const [tooglePageView, setTogglePageView] = useState(false
    );

  const [appState, changeState] = useState({
    acitveObject: 0,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  function toggleActive(index) {
    changeState({ ...appState, acitveObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.acitveObject) {
      return "active";
    } else {
      return "btn-li inactive";
    }
  }

  const handleClick = () => {
    setTogglePageView(true);
  };

  let num = appState.acitveObject.id;

  return (
    <>
      {tooglePageView ? (
        <ThankYou selectedNumber={num} />
      ) : (
        <Card
          appState={appState}
          togglePage={handleClick}
          toggleActive={toggleActive}
          toggleActiveStyles={toggleActiveStyles}
        />
      )}
    </>
  );
}

export default App;
