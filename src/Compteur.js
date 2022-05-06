import React, { useState } from 'react';

const Compteur = () => {
    const [count, setCount] = useState();
    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        if (count > 0)
            setCount(count - 1)
    }
    return (

        <div>
            <h1>counter value :</h1>
            {count}
            <button onClick={inc}> plus 1  </button>

            <button onClick={dec}> minus 1 </button>

            <h1>last button cliked</h1>

        </div>
    );
};

export default Compteur;