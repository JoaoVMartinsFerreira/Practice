import React, { Component, useState } from 'react';
import Hello from './Hello';
import Print from './print';
import Toggle from './Toggler'




const App = () => {
 const [toggle, setToggle] = useState(true);

 const handleToggle = () => {
  setToggle(!toggle)
 }
    return (
      <div className='App'>
        <Hello name={"React"} />
        <Print />

        <Toggle toggle={toggle} onToggle={handleToggle}/>
       
      </div>
    );
  
}
export default App;
// Log to console
console.log('Hello console');
