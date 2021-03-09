import React from 'react';

const TasksList = props => {
  const userToDoArray= [props]
  
  return(
    <ul>
       {userToDoArray.map(i=>{
          return <li key={i.id}>{i.todoBody}</li>
      })} 
    </ul>
  )
}
export default TasksList;