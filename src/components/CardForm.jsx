import { useState } from "react";


function CardForm({addCity}){
const [count,setCount]=useState(4);

const [formData,setFormData]=useState({
    id:"",
    name:"",
    imgUrl:"",
    description:"",
    isPolluted:false,
    IsAmazing:true,
    isVisited:false ,
})
const handleInputChange= (e)=>{
    const {name,type,checked,value}=e.target                     //sono tutti gli attributi del nostro target che è richiamato
          const inputValue = type == 'checkbox'?  checked: value        //da handleInputChange quindinel caso specifico avrò questi tipi di valori
    setFormData({
        ...formData,
        [name]:inputValue
    });
};

const handleSubmit= (e)=>{
    e.preventDefault();
       const city={
        id:count,
        name: formData.name,
        imgUrl: formData.imgUrl,
        description:formData.description,
        isPolluted:false,
        IsAmazing:true,
        isVisited:formData.isVisited,
      }
       addCity(city);
       setCount((count)=>count +1);
       setFormData({id:"",
        name:"",
        imgUrl:"",
        description:"",
        isPolluted:false,
        IsAmazing:true,
        isVisited:false ,
    });
    }
    // const handleSubmit2=()=>{
    //     removeCity();
    // }
    return(
    
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 p-5">
                <div className="flex flex-col">
                <input className="text-center rounded-md m-1" placeholder="Nome Città" 
                type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
                </div>
                <div className="flex flex-col">
                <input className="text-center rounded-md m-1" placeholder="Url Immagine Città" 
                type="text" name="imgUrl" value={formData.imgUrl} onChange={handleInputChange}></input>
                </div >
                <div className="flex flex-col">

                <textarea className="text-center rounded-md m-1" placeholder="descrizione Città" 
                name="description" value={formData.description} onChange={handleInputChange}></textarea>
                </div>
                <div className="flex flex-row justify-center">
                <label className="flex flex-col" >visitata  &#x2753; </label>
                <input   type="checkbox"  name="isVisited"
                checked={formData.isVisited} onChange={handleInputChange}></input>
                </div>
            
            <button type="submit" className="m-1 bg-slate-700  hover:shadow-white w-50">Aggiungi Città</button>
            {/* <button onClick={handleSubmit2} className="m-1  hover:shadow-white w-50">Rimuovi Città</button> */}
            </form>
          
    
    );
}
export default CardForm;