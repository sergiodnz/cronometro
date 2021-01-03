
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './components/Rotas';
import Opcoes from './components/Opcoes';

function App() {

  return (
    <div className="App">
     <CssBaseline />
     <BrowserRouter>
     <Opcoes />
     <Rotas />
    </BrowserRouter>
    </div>
  );
}

export default App;
