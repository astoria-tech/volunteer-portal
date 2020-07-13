import React, {useState, useEffect} from 'react';
import './App.css';

import SignIn from './SignIn';
import Form from './Form';

function App() {
  const [token,setToken]=useState(false)
  useEffect(()=>{
    fetch('/api/v1/initial')
    .then(res=>{
      if(res.status===302){
        setToken(true)
      }
    })
  },[]); 
  return (
    <div className="App">
      {token ? <Form />:<SignIn />}
    </div>
  );
}

export default App;
