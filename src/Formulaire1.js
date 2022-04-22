import React from 'react';
import { useState } from 'react';

const Formulaire1 = () => {

    const [nom, setNom] = useState('Eric')
    const [txt, setTxt] = useState('Text de dépard')
    const [select, setSelect] = useState('demo1')
    const [multiselect, setMultiSelect] = useState(['demo2', 'demo3'])
    const [ischecked, setCheked] = useState(false)
    const form = {
        fname: '',
        lname: '',
        newsletter: false
    }
    const [formulaire, setFormulaire] = useState(form)


    const handleChange = (event) => {
        setNom(event.target.value)
    }
    const handleChangeTxt = (event) => {
        setTxt(event.target.value)
    }
    const handleChangeSelect = (event) => {
        setSelect(event.target.value)
    }
    const handleChangeMutiselect = (event) => {
        setMultiSelect(Array.from(event.target.selectedOptions).map(elem => elem.value))
    }
    const handleChangeChecked = (event) => {
        setCheked(event.target.checked)

    }
    const handleChangeCommun = (event) => {
        const name = event.target.name;
        console.log(name);
        const type = event.target.type;
        console.log(type);
        const value = type === 'checkbox' ? event.target.checked : event.target.value
        setFormulaire({ [name]: value })
        console.log(value);

    }

    return (
        <div class="mt-2">
            <div class="-">
                <label htmlFor="nom">Mon nom :</label><br></br>
                <input type="text" id="nom" name="nom" value={nom} onChange={handleChange} />
            </div>
            <div class="mt-2">
                <label htmlFor="">Note :</label><br></br>
                <textarea type="text" id="nom" name="nom" value={txt} onChange={handleChangeTxt} />
            </div>
            <div>
                <select value={select} onChange={handleChangeSelect} >
                    <option value="demo1">Demo1</option>
                    <option value="demo2">demo2</option>
                    <option value="demo3">demo3</option>
                    <option value="demo4">Demo4</option>

                </select>
            </div>
            <div>
                <select value={multiselect} onChange={handleChangeMutiselect} multiple >
                    <option value="demo1">Demo1</option>
                    <option value="demo2">demo2</option>
                    <option value="demo3">demo3</option>
                    <option value="demo4">Demo4</option>
                </select>
                <div>
                    <label htmlFor='accepter'>Accepter</label><br></br>
                    <input type="checkbox" id="accepter" checked={ischecked} onChange={handleChangeChecked} />
                    {ischecked ? <div>la checkbox est cochée</div> : <div>la checkbox n'est pas cochée</div>}
                </div>
                <div>
                    <div class="-">
                        <label htmlFor="nom">First Name:</label><br></br>
                        <input type="text" id="fname" name="fname" value={formulaire.fname} onChange={handleChangeCommun} />
                    </div>
                    <div class="-">
                        <label htmlFor="nom">Last Name :</label><br></br>
                        <input type="text" id="lname" name="lname" value={formulaire.lname} onChange={handleChangeCommun} />
                    </div>
                    <div class="-">
                        <label htmlFor="newsletter">News Letter :</label><br></br>
                        <input type="checkbox" id="newsletter" checked={formulaire.newsletter} onChange={handleChangeCommun} />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Formulaire1;