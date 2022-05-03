import React from 'react';
import { useState } from 'react';



const Formulaire = () => {

    const [nom, setNom] = useState()
    const [âge, setÂge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [formulaire, setFormulaire] = useState([])




    const handleChange = (event) => {
        setNom(event.target.value)
    }
    const handleChangeÂge = (event) => {
        setÂge(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangepassword = (event) => {
        setPassword(event.target.value)
    }
    const handleChangepassword2 = (event) => {
        setPassword2(event.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        if (password !== password2) {
            alert("password Not Match")


        } else {
            alert('a from was submitted with name :"' + nom + '",age: "' + âge + '",email: "' + email + '"');
            let newEntry = {
                nom: nom,
                age: âge,
                email: email
            }
            console.log(newEntry);
            setFormulaire([...formulaire, newEntry]);
        }
    }
    const liste = formulaire.map((elem, index) =>
        <div>
            <h2>form: {index + 1}</h2>
            <div>Nom: {elem.nom}</div>
            <div>Age: {elem.âge}</div>
            <div>email: {elem.email}</div>
        </div>
    )
    return (
        <div class="mt-4">
            <h1>Sing-up Form</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div class="mt-4">
                    <label htmlFor="nom">nom :</label><br></br>
                    <input type="text" id="nom" name="nom" value={nom} required onChange={handleChange} />
                </div>
                <div class="mt-4">
                    <label htmlFor="nom">âge:</label><br></br>
                    <input type="number" id="âge" name="âge" value={âge} required onChange={handleChangeÂge} />
                </div>
                <div class="mt-4">
                    <label htmlFor="nom">E-mail :</label><br></br>
                    <input type="email" id="email" name="email" value={email} required onChange={handleChangeEmail} />
                </div>
                <div class="mt-4">
                    <label htmlFor="note">Password :</label><br></br>
                    <input type="password" id="password" name="password" value={password} required onChange={handleChangepassword} />
                </div>
                <div class="mt-4">
                    <label htmlFor="note">Confirme Password :</label><br></br>
                    <input type="password" id="password2" name="password2" value={password2} required onChange={handleChangepassword2} />
                </div>
                <button type="submit" variant="outline-danger" class="mt-4" value="submit">envoyé</button>
            </form>
            <div><h1>liste of entities</h1>{liste}</div>

        </div >
    );
};

export default Formulaire;