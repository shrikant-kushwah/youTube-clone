import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {

  const [text, setText] = useState(0);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering.....");

  // // Heavy operation , first method  but this is heavy operation.
  // const prime = () =>{
  //   console.log("Calculatinig prime number of ", text)
  //   return findPrime(text);
  // }

//   // if nth prime number is not heavy operation then we can use this
// const prime = findPrime(text);

  // Memoizetion, 2nd method and this the best way.
  // we can use heavy operation
  const prime = useMemo(()=>findPrime(text),[text]);
   

  return (
    <div className={'m-4 p-2 border border-black h-96 w-96 ' + (isDarkTheme && "bg-gray-900 text-white")}>
      <div>
        <div>
          <button className='bg-green-200 rounded-lg p-2 m-4  font-bold text-black ' onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>
        <input
        className='border border-black w-72 px-2 text-black rounded-lg'
        value={text}
        onChange={(e)=>setText(e.target.value)} 
        type="number" 
        />
      </div>
      <h1 className='font-bold text-xl'>nth prime : {prime}</h1>
    </div>
  )
}

export default Demo;
