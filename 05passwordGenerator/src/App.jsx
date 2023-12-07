import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback is used if a function is used again and again then to optimize it
  //this hook will memorize some part of this function and whenever it is called
  //it will retain it.
  // so we have to pass a function and dependeny array in it
  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890"
    if (charAllowed) str+= `!@#$%^&*()_+-=[]{}|;:'",.<>?/`

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, charAllowed, numAllowed, setPassword]);

  // useEffect is used to run the function whenever any state in dependency array
  // is changed. so useCallback is for optimization but useEffect is for running
  // the function on state change
  useEffect(()=>{
    passwordGenerator();
  },[length, charAllowed, numAllowed])

  //useRef Hooks
  //used to get the current/specific value of states 
  const passwordRef = useRef(null);
  const copyToClipboard=useCallback(()=>{
    //for styling and text selection on copy click
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99); // to copy specific range of chars
    //with this the password will be copied
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
    <div className='w-full max-w-md text-center bg-gray-800
    rounded-lg px-4 py-3 my-8 mx-auto shadow-md text-orange-600'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      
      {/* Password generator UI */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='w-full px-3 py-1 outline-none'
        placeholder='password'
        readOnly
        ref={passwordRef} />
        <button className='text-white bg-blue-700 px-2 hover:bg-blue-900'
        onClick={copyToClipboard}>Copy</button>
      </div>

     
      <div className='flex text-sm gap-x-2'>
         {/* Length range input */}
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className=' cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
         {/* Number checker input */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked= {numAllowed}
          id= "numberInput"
          onChange={(prev)=>{ setNumAllowed((prev)=>!prev) }} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        {/* Character checker input */}
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked= {charAllowed}
          id= "characterInput"
          onChange={(prev)=>{ setCharAllowed((prev)=> !prev) }} />
          <label htmlFor='characterInput'>Characters</label>
        </div>

      </div>

      

    </div>
    </>
  )
}

export default App
