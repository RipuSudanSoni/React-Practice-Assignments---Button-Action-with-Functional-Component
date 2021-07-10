import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [change, setChange] = useState(true);
  return (
    <>
    <div>
      <button onClick = {()=> setChange(!change)}>click</button>
       {change?<p>para</p> : <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
    </>
  );
}


export default App;
