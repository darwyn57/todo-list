import './App.css';
import React, { useState } from 'react';
import Todolist from './Todolist';
import Formulaire1 from './Formulaire1';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todolist />
        <Formulaire1 />
      </header>
    </div>
  );
}

export default App;
