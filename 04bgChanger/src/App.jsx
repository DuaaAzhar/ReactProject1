import { useState } from 'react'
import Button from './components/Button';
function App() {
  const [color, setColor] = useState("olive");
  
  return (
    
    <div className='w-screen h-screen duration-200'
     style={{backgroundColor: color}}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-3xl'>
          <Button color="Red" text="white" setColor={setColor}/>
          <Button color="Green"  text="white" setColor={setColor}/>
          <Button color="Blue"text="white" setColor={setColor}/>
          <Button color="Olive" text="white" setColor={setColor}/>
          <Button color="Gray" text="black" setColor={setColor}/>
          <Button color="Yellow" text="black" setColor={setColor}/>
          <Button color="Pink" text="black" setColor={setColor}/>
          <Button color="Purple" text="black" setColor={setColor}/>
          <Button color="Lavender" text="black" setColor={setColor}/>
          <Button color="White" text="black" setColor={setColor}/>
          <Button color="Black" text="white" setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
