import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {

  const [y, setY] = useState(0);

  let x = 0;

  const ref = useRef(0);

  /**
   * not like => ref = 0;
   * it is like => ref ={current:0}
   * 
   */
  console.log("Rendering...");
const i =useRef(null);
  useEffect(()=>{
    if(i.current) return;
    i.current = setInterval(()=>{
      console.log("Hey Shrikant kushwah!")
    },2000);
  },[]);

  return (
    <div className='m-4 p-2 border border-black bg-slate-100 w-96 h-96'>
      <div>
        <button
          className='bg-green-200 p-2 m-2 rounded-lg font-bold'
          onClick={() => {
            x = x + 1;
            console.log("X = ", x);
          }}
        >Increase x</button>
        <span className='font-bold text-xl'>let = {x}</span>
      </div>
      <div>
        <button
          className='bg-green-200 p-2 m-2 rounded-lg font-bold'
          onClick={() => {
            setY(y+1);
          }}
        >Increase Y</button>
        <span className='font-bold text-xl'>state = {y}</span>
      </div>
      <div>
        <button
          className='bg-green-200 p-2 m-2 rounded-lg font-bold'
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref = " , ref.current);
          }}
        >Increase ref</button>
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
      </div>
      <button className='p-4 m-4 bg-red-950 font-bold text-xl rounded-lg text-white' onClick={()=>{clearInterval(i.current);}}>Stop Printing</button>
    </div>
  )
}

export default Demo2;
