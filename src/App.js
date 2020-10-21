import React, { useState } from 'react';
import './App.css';
import Regressivo from './components/Regressivo';
import { TextField } from '@material-ui/core';

function App() {

  const [tempo,setTempo] = useState(0);

  const alterarTempo = event => {
        
    if (!isNaN(event.target.value)) {
        const segundos = parseInt(event.target.value);
        setTempo(segundos);
    } else {
        setTempo(0);
    }
};

  return (
    <div className="App">
     
      <header className="App-header">
      <TextField
            id="outlined-basic"
            label="tempo em segundos"
            onChange={e => alterarTempo(e)}
        />
        <div>...</div>
        <Regressivo tempo={tempo} />
      </header>
    </div>
  );
}

export default App;
