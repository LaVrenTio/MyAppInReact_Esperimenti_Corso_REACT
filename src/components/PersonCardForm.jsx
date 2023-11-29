import { useState } from "react";

function PersonCardForm({addPerson,resetForm}){

const[count,setCount]=useState(0);
const[formPerson,setFormPerson]=useState(count);
const handleInputChange= (e)=>{
    const {name,value}=e.target                              
    setFormPerson({
        ...formPerson,
        [name]:value
    });
};
const handleSubmit = (e)=>{
e.preventDefault();
const person ={
    id: count,
    name: formPerson.name,
    surname: formPerson.surname,
    imgUrl: formPerson.imgUrl,
    cf: formPerson.cf,
    phone: formPerson.phone,
}
addPerson(person);
setCount((count)=> count +1);
setFormPerson({id:"",
    name: "",
    surname: "",
    imgUrl : "",
    cf:"",
    phone :"",})

}


return(
    <div className=" p-10  h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
        <form onSubmit={handleSubmit} className="  flex flex-col gap-3 w-80 mb-10 p-5" >
            <label htmlFor="lblname">Nome:</label>
            <input className=" bg-white" placeholder="name" name="name" type="text" value={formPerson.name} onChange={handleInputChange}></input>
            <label htmlFor="lblsurnname">Cognome:</label>
            <input placeholder="Cognome"name="surname"value={formPerson.surname} onChange={handleInputChange}></input>
            <label htmlFor="lblcf">Codice Fiscale:</label>
            <input placeholder="cod Fisc" name="cf" value={formPerson.cf} onChange={handleInputChange}></input>
            <label htmlFor="lblphon">Telefono:</label>
            <input placeholder="Phone number" name="phone" value={formPerson.phone} onChange={handleInputChange}></input>
            <label htmlFor="lblpic">insersici una foto</label>
            <input placeholder="url immagine" name="imgUrl" value={formPerson.imgUrl} onChange={handleInputChange}></input>
            <button type="submit">Aggiungi Persona</button>

        </form>
       
    </div>
);

}
export default PersonCardForm;