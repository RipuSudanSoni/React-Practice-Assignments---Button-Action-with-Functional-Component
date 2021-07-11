import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [changes, setChange] = useState(false);
  const handler = () => {
    setChange(true);
  }
  const renderParaButton = () => {
    if(changes) {
      return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      
    }
    else {
      return <button id="click" onClick = {handler}>click Me</button>
    }
  }

  return (
    <div id="main">
      {renderParaButton}
    </div>
  );
}


export default App;

// import React, {Component, useState} from "react";
// import "./../styles/App.css";

// function App() {
//   const[renderPara,setRenderPara]=useState(false);
  
//   const buttonClickHandler = () =>{
//     setRenderPara(true);
//   }

//   const renderParaButton =()=>{
//     if(renderPara){
//       return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>

//     }
//     else{
//       return <button id="click" onClick={buttonClickHandler}>Click Me</button>
//     }
//   }
//   return (
//     <div id="main">
//       {renderParaButton()}
//     </div>
//   );
// }


// export default App;