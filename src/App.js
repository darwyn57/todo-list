import './App.css';
import React, { useState } from 'react';
import Todolist from './Todolist';
import Formulaire from './Formulaire';
import TestEffect from './TestEffect';
import Compteur2 from './Compteur2';
import { db } from './config.firebase';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todolist />

        {/* <Formulaire1 /> */}
        {/* <Formulaire /> */}
        {/* <TestEffect /> */}
        {/* <Compteur2 /> */}
      </header>
    </div>
  );
}

export default App;
