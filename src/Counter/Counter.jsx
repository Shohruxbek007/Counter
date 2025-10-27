import React, {useState} from 'react'
import "./Counter.css"
const Counter = () => {
  const [count, setCount]=useState(0)
  function decrement(){
    let a;
    if(count==1){
      a=0
    }
    else{
      a=1
    }
    console.log(a)
    setCount(count-a)
    
  }
  function increment(){
    setCount(count+1)
  }
  function reset(){
    setCount(count-count)
  }
    return (
    <div className='container'>
      <h2>{count}</h2>
      <div className='buttons'>
        <button className='red' onClick={decrement}>decrement</button>
      <button  onClick={reset}>reset</button>
      <button className='blue' onClick={increment}>increment</button>
    </div>
    </div>
  )
}

export default Counter
