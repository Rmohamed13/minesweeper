import React from 'react';
import Board from './Components/Board';
import './App.css';

function App() {

 
  const refresh = () => {
    window.location.reload();
  }
   
  
  return (
    <div >
      <h1 className="title">MINESWEEPER</h1>
      <Board/>
      <button onClick={refresh}>RESET</button>
    </div>
  );
}

export default App;