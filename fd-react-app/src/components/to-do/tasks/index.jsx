import React from 'react'

const TasksList = props => {
  const { userToDoArray, del,isDone } = props
  console.log(userToDoArray)
  return (
    <>
      {userToDoArray.map(task => {
        return (
          <li key={task.id}>
            {task.todoBody}
            <button key={task.id} onClick={() => del(task.id)}>
              Del
            </button>
            <button key={task.id} onClick={() =>isDone(task.id)}>
              Done
            </button>
          </li>
        )
      })}
    </>
  )
}
export default TasksList
