import React from "react"
import { TodoForm } from "../../ui/TodoForm"

function NewTodoPage() {
  return (
  <TodoForm 
    label="Create New TODO"
    submitText="Add"
    submitEvent={() => console.log('create addTodo')}
  />
)
}   

export { NewTodoPage }