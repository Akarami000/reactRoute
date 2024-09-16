import { useState,useContext } from 'react'
import './App.css'
import { Countcontext } from './Context'

function App() {
  const [count, setCount] = useState(0)


  // wrap anyone that wants to use  the teleported value inside the provider
  return (
    <>
    <Countcontext.Provider value={count} > 
     <Count setCount={setCount}/>
     </Countcontext.Provider>
    
    </>
  )
}

const Count = ({setCount})=>{
  return<>
  <CountRender/>
  <Button setCount={setCount} />
  </>
}

const CountRender = ()=>{
  const count =  useContext(Countcontext);
  return <div>  
    {count}
  </div>
}

const Button = ({setCount})=>{
  const count =  useContext(Countcontext);

  return<>
  <button onClick={()=>{ setCount(count+1)}} >increment</button>
  <button onClick={()=>{ setCount(count-1)}} >decrement</button>
  </>
}
export default App
