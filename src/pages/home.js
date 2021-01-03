import React, { useState } from 'react';
import '../App.css';
import Regressivo from '../components/Regressivo';
import { TextField } from '@material-ui/core';

function Home() {

  const [tempo,setTempo] = useState(0);

  const alterarTempo = event => {
    setTempo(0);
    if (!isNaN(event.target.value)) {
      setTempo(parseInt(event.target.value));
    }
  };

  return (
    <div className="App">
     
      <header className="App-header">
        {tempo?tempo:0}
      <Regressivo tempo={tempo?tempo:0} />
      <div>...</div>
      <TextField type="number"
            id="tempo"
            title="tempo em segundos" color='primary'
            onChange={e => alterarTempo(e)}
        />
      </header>
    </div>
  );
}

export default Home;