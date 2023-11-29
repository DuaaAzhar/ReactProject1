import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

 const addValue = ()=>{
  if(counter+1 <= 20){
  counter += 1;
  setCounter(counter);
  // this will not increase the value by 4 bcz in react we got customization
  // in which it updates the UI in with bunch of updates, so it will analyze the same thing is happening
  // so it will perform it only once
  // setCounter(counter +1);
  // setCounter(counter +1);
  // setCounter(counter+1);

  // so for its solution, we get a hidden callback function in useState setter, 
  // callback function will perform after the update happens 
  setCounter(counter => counter +1);
  setCounter(counter => counter +1);
  setCounter(counter => counter +1);
  setCounter(counter => counter +1);
  
  }
  
 }
 const decreaseValue=()=>{
  if(counter -1 >= 0){
    counter -= 1;
    setCounter(counter);
  }
 }
  return (
    <>
     <h1>Vite React</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
