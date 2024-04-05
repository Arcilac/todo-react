import React from "react"
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext"

function TodoCounter({ total, completed }) {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOs
    </h1>
  )
}

export { TodoCounter }
