import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [changes, setChange] = useState(false);
  const Eventhandler = () => {
    setChange(true);
  }
  const renderParaButton = () => {
    if(changes) {
      return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      
    }
    else {
      return <button id="click" onClick = {Eventhandler}>click Me</button>
    }
  }

  return (
    <div id="main">
      {renderParaButton()}
    </div>
  );
}

export default App;