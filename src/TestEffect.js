import React, { useEffect, useState } from 'react';


const TestEffect = () => {
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        console.log('I re-idnered')
    })
    useEffect(() => {
        console.log("the component mounted")
    }, [])
    //on first render + whenever dependancy changes
    useEffect(() => {
        console.log('the name changed!', { nom }, 'andthe age to :(or maybe not) ', { age })
        return () => {
            console.log('we unmonted');
        }
    }, [nom, age])
    useEffect(() => {
        console.log('attache listener')
        window.addEventListener('resize', updatewindowWidth);
    }, [])
    const updatewindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }


    return (
        <div className="TestEffet">
            <h2>The window with is:{windowWidth}</h2>
            <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="entrer un nom" />
            <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="entrer un age" />
        </div>

    );
};

export default TestEffect;