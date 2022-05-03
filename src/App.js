import './App.css';
import React, { useState } from 'react';
import Todolist from './Todolist';
import Formulaire from './Formulaire';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Todolist /> */}
        {/* <Formulaire1 /> */}
        <Formulaire />
      </header>
    </div>
  );
}

export default App;
