import React, { useEffect, useState } from 'react';


const Compteur2 = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const increment = () => {
        setCount(count + 1);
        setLastAction("+1");

    }
    const decrement = () => {
        setCount(count - 1);
        setLastAction("-1");
    }
    useEffect(() => {
        if (count === 10 || count === -10) { alert('ça commence à faire trop !') }
    }, [count])

    return (
        <div>
            <p> Current  counter value</p>
            <h2>{count}</h2>
            <button onClick={increment}>plus 1</button>
            <button onClick={decrement}>minus 1</button>
            <p>Last button clicked : </p>
            <h2>{lastAction}</h2>


        </div>
    );
};

export default Compteur2;