import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 10
  const Addvalue = () => {
    if( counter == 20){
      setCounter(counter = 20)
    }
    else{
      setCounter(counter + 1)
    }
   // setCounter(prevCounter => prevCounter + 1)
   // setCounter(prevCounter => prevCounter + 1)
   // setCounter(prevCounter => prevCounter + 1)
   // setCounter(prevCounter => prevCounter + 1)
    
    // console.log("Clicked", counter);
    // counter = counter + 1;
    // setCounter(counter);
  };

  const Removevalue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      setCounter(counter = 0);
    }
   
  };

  return (
    <>
      <h1> Learn React </h1>
      <h2>Learn Hooks and States {counter} </h2>
      <button onClick={Addvalue}>Add count {counter} </button>
      <br />
      <button onClick={Removevalue}>Remove count</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
