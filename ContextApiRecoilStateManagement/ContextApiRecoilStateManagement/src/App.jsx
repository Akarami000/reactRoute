import { useContext } from 'react'
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState,selector} from 'recoil'
import './App.css'
import { Countcontext } from './Context'
import {countAtom} from './store/atoms/count'
import {isEvenSelector} from './store/selector/evenSelector'


function App() {
  


  // wrap anyone that wants to use  the teleported value inside the provider
  return (
    <>
    <RecoilRoot>
     <Count />  
     <br>
     </br> 
     <EvenRender/>
    </RecoilRoot> 
    </>
  )
}
const EvenRender = ()=> {
  const even = useRecoilValue(isEvenSelector);
  return<div>
    {even ? "this is even":null}
  </div>
}

const Count = ()=>{
  return<>
  <CountRender/>
  <Button  />
  </>
}

const CountRender = ()=>{
  const count = useRecoilValue(countAtom);
  return <div>  
    {count}
  </div>
}

// const Button = ()=>{
//   const [count,setCount] = useRecoilState(countAtom);

//   return<>
//   <button onClick={()=>{ setCount(count+1)}} >increment</button>
//   <button onClick={()=>{ setCount(count-1)}} >decrement</button>
//   </>
// }

const Button = ()=>{
  const setCount = useSetRecoilState(countAtom);
  console.log("to stop unwanted rendering ")

  return<>
  <button onClick={()=>{ setCount(count => count+1)}} >increment</button>
  <button onClick={()=>{ setCount(count => count-1)}} >decrement</button>
  </>
}
export default App
