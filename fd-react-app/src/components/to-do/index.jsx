import React, {useState}from 'react';
import Header from './header';
import FormToDo from './form';
import TasksList from './tasks';


const ToDos = props => {
  const [userToDoArray, setUserToDo]=useState([
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
    setUserToDo([...userToDoArray, newToDo])
  } ;
  

  const del = (id) =>{

      const newUserToDo = userToDoArray.filter(i=> i.id !== id);
      setUserToDo([...newUserToDo]);
  }

  return(
    <section>
      <Header/>
      <FormToDo onSubmit = {onSubmit} /> 
       <ul>
        <TasksList userToDoArray={userToDoArray} del={del}/>
       </ul>

    </section>
  )
}

export default ToDos;