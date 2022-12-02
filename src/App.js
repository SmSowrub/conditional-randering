import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User/User';

function App() {
  const [condition,setCondition]=useState(false);
  return (
    <div className="App">
      <h2>Is Friend:{condition.toString()}</h2>
      <button onClick={() => setCondition(!condition)}>Toggle</button>
      <User condition={condition}></User>
    </div>
  );
}

export default App;
