
import React from 'react';
import { useState } from 'react';
import './App.js'

function Todolist() {


    const [userInput, setUserInput] = useState('');
    const [items, setItems] = useState([]);
    const HandelChange = (event) => {
        setUserInput(event.target.value);
        //Crée newItem avec les rentrées
    };


    const addTodo = (event) => {
        event.preventDefault();
        let newItem = {
            id: Date.now(),
            item: userInput,
        }
        console.log(newItem)
        //metter les infos newItems(tableau)dans items
        const newItems = [newItem, ...items];
        //set pour écraser les anciennes données
        setItems(newItems);
        setUserInput('');
        console.log(newItem);
    }
    //Vérifier l'id sur le bouton et le supprime et si strictement diff il garde

    const removeTodo = (id) => {
        const removeItems = items.filter((item) => item.id !== id)
        setItems(removeItems);
    }
    //methode pour modifier une un element de la liste avec sont id
    const modifyTodo = (id) => {
        const removeItems = items.filter((item) => item.id !== id)
        const selectedItems = items.find(item => item.id === id)
        setItems(removeItems);
        setUserInput(selectedItems.item)

    }
    //liste des items avec les bouttons supprimer et modifier 
    const list = items.map((elem) =>
        <div key={elem.id}>  {elem.item} | <button class="btn btn-outline-danger" onClick={() => removeTodo(elem.id)}>supprimer</button>
            <button onClick={() => modifyTodo(elem.id)}>Modifier</button>
        </div>)
    return (
        <div class="mb-2">
            <h1>Ma To Do List</h1>
            <form>
                {/* pour controler ce que l'on rempli et renvoyer = value */}
                <input value={userInput}
                    onChange={HandelChange}
                    type="text"
                    placeholder="Renseignez un titre" />
                <button variant="outline-danger" onClick={addTodo}>Ajouter</button>
            </form>
            <div>
                {list}
            </div>
        </div>

    );
}

export default Todolist;