import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

 const addValue = ()=>{
  if(counter+1 <= 20){
  counter += 1;
  setCounter(counter);
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
