import { useState , useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  //useCallback hook
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "()*&$#@?{}[]!<>"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setpassword(pass)

  },[length,numberAllowed,,charAllowed,setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])


  //useEffect hook
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-800 bg-gray-700
      '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className='text-white bg-blue-700 outline-none px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type ="range"
            min={6}
            max={100}
            className='cursor-pointer'
            value={length}
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type ="checkbox"
           defaulterChecker= {numberAllowed}
          id="numberInput"
            onChange={()=> {setNumberAllowed((prev)=> !prev)}}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input 
            type ="checkbox"
           defaulterChecker= {charAllowed}
          id="characterInput"
            onChange={()=> {setCharAllowed((prev)=> !prev)}}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>


        </div>
        
      </div>
    </>
  )
}

export default App
