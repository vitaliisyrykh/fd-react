import React from 'react';

const TasksList = props => {
  const {userToDoArray, del}= props
  console.log(userToDoArray);
  return(
    <>
       {userToDoArray.map(i=>{
         
          return <li key={i.id}>{i.todoBody}<button key={i.id} onClick={del}>Del</button></li>
      })} 
    </>
  )
}
export default TasksList;