import OutlinedCard from './components/card';
import Btn from './components/button';
import Appbar from './components/appBar'
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
function App() {
  const [counter, setCounter] = useState(0)
  const inc = ()=>{setCounter(counter+ 1)}
  const dec = ()=>{setCounter(counter -1)}
  // const arr = ['One', 'Two', 'Three','Four'];
  // const descriptions = [
  //   'Description for the first card.',
  //   'Description for the second card.',
  //   'Description for the third card.',
  //   'Description for the fouth card.',

  // ]; 
  
  return(
    <>
    <h1>Counter App</h1>
   <h2>{counter}</h2>
   <Btn onClick={inc} type='Increment'/>
   <Btn onClick={dec} type='Decrement'/>
    

    {/* <Appbar />
      {arr.map((title, index) => (
        <OutlinedCard key={index} title={title}  descriptions={descriptions[index]}/>
      ))}
     <Btn type="Click Me"/> */}
   
    </>
  );
}

export default App;
