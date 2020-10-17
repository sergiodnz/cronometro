import React from 'react';
import './App.css';
import Regressivo from './components/Regressivo';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <header className="App-header">
        <Regressivo segundos={10} />
      </header>
    </div>
  );
}

export default App;
