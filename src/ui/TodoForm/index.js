import React from "react"
import "./TodoForm.css"
import { useNavigate } from "react-router-dom"

function TodoForm(props) {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || "")

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    navigate('/')
  }
  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/')
    props.submitEvent(newTodoValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Write" />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.submitText}
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
