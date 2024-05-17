import React from "react"
import { useNavigate } from "react-router-dom"
import { useTodos } from "../useTodos"
import { TodoHeader } from "../../ui/TodoHeader"
import { TodoCounter } from "../../ui/TodoCounter"
import { TodoSearch } from "../../ui/TodoSearch"
import { TodoList } from "../../ui/TodoList"
import { TodoItem } from "../../ui/TodoItem"
import { TodosError } from "../../ui/TodosError"
import { TodosLoading } from "../../ui/TodosLoading"
import { EmptyTodos } from "../../ui/EmptyTodos"
import { CreateTodoButton } from "../../ui/CreateTodoButton"
import { ChangeAlert } from "../../ui/ChangeAlert"



function HomePage() {
  const navigate = useNavigate()
  const { state, stateUpdaters } = useTodos()

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state

   const { 
    deleteTodo, 
    setSearchValue, 
    sincronizeTodos, 
    completeTodo,
} = stateUpdaters

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No results for {searchText}</p>}
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => navigate('/edit/' + todo.id)}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton 
        onClick={() => navigate("/new")}
      />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  )
}

export { HomePage }
