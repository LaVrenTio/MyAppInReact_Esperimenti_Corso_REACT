import { useState,useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'
import PersonCardForm from './components/PersonCardForm'

function formReducer(state,action){
  switch(action.type){
    case "CHANGE_FIELD": 
    return {...state,[action.field]:action.value};
    case "RESET_FORM":
      return {name:'', email:''};
    case "MODIFY_FORM":
      return {...state,name: state.name.toUpperCase(),email:state.email.toUpperCase()
        ,
              // persons: state.persons.map((person)=>({
              //   ...person,
              //   name:person.name.toUpperCase(),
              // }))
      };
    default:
     return state;
  }
}

function App() {
  const [count, setCount] = useState(0)
  const[persons,setPerson]=useState([0])
  console.log("=====>",persons.length)
  const addPerson= (person)=>{
    setPerson([...persons,person]);
  }
  const [FormState, dispatchFormState]=useReducer(formReducer,{name:'',email:''});
  const handleFieldChange = (field,value) =>{
    dispatchFormState({type: "CHANGE_FIELD",field,value})
  
  }
  useEffect(()=>{
    if(count==0){
      document.title='MyAppInReact';
    }
    else
    document.title= `count ${count} `;
  },[count]);
  
  const resetForm = (e) =>{
    e.preventDefault();
    dispatchFormState({type: "RESET_FORM"})
  }
  const sendForm= (e)=>{
    e.preventDefault();
    console.log("FormState===>",FormState.name);
  }
   const handleClickUpper = (e)=>{
    e.preventDefault();
    dispatchFormState({type: "MODIFY_FORM"})
    
    
   }

  const myHandleClick=(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
 
  })



  return (
    < >
    <div className=' bg-orange-400'>
    <div  className=' bg-orange-400' >
        <PersonCardForm addPerson={addPerson} resetForm={resetForm}></PersonCardForm>
    </div>

<div>
  <button onClick={myHandleClick}>fetch this out</button>
  <form >
    <div>
    <label htmlFor="name" className=' space-x-3'> Name : </label>
    <input className=' mb-1 space-x-2'
    type='text'
    id='name'
    name='name'
    value={FormState.name}
    onChange={((e)=> handleFieldChange("name",e.target.value))} 
    />
     
    </div>
    <div className=' bg-slate-300'>
    <label htmlFor="email"> email  : </label>
    <input 
    type='email'
    id='email'
    name='email'
    value={FormState.email}
    onChange={((e)=> handleFieldChange("email",e.target.value))}
    />
   
    </div>
    <button className=' bg-slate-300' onClick={resetForm}>Reset</button>
    <button onClick={sendForm}>Invia</button>
    <button  onClick={handleClickUpper}> modifica</button>
    
  </form>
</div>

      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3  ">
         { persons.length<=1? <p></p> : persons.map((person)=>
          <PersonCard 
             key={person.id}
             name={person.name}
             lastname={person.surname}
             cf={person.cf}
             phone={person.phone}
             imgUrl={person.imgUrl}
          >
          </PersonCard>) }

        </div>
        </div> 
    </>
  )
}

export default App
