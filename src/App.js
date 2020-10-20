import React, { useState } from 'react';
import './App.css';
import Regressivo from './components/Regressivo';
import { TextField } from '@material-ui/core';

function App() {

  const [tempo,setTempo] = useState(10);
  const maxSeconds = (24*60*60);

  const alterarTempo = event => {
        
    if (!isNaN(event.target.value)) {
      
        const segundos = parseInt(event.target.value);
        if (segundos<=maxSeconds){
          setTempo(segundos);
        } else {
          setTempo(maxSeconds);
        }
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
        <hr />
        <Regressivo tempo={tempo} setTempo={setTempo} />
      </header>
    </div>
  );
}

export default App;
