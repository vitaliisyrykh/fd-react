import React, {useState}from 'react';
import Header from './header';
import FormToDo from './form';
//import Tasks from './tasks';


const ToDos = props => {
  const [userToDo, setUserToDo]=useState([
    {
      id:Date.now(),
      todoBody:'',
      isDone:false,
  
  }]);

 const onSubmit=(values) =>{
    const newToDo = {
      todoBody : values.todoBody,
      id:Date.now(),
      isDone:false,
    };
    setUserToDo([...userToDo, newToDo])
    console.log(values);
  } 
  return(
    <section>
      <Header/>
      
       <FormToDo onSubmit = {onSubmit} /> 
      {/* <Tasks/> */}
    </section>
  )
}

export default ToDos;