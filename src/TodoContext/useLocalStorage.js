import React from "react"

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
    let parsedItem
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = [initialValue]
      } else {
        parsedItem = JSON.parse(localStorageItem)
        setItem(parsedItem)
      }
      setLoading(false)
      } catch(error) {
        setLoading(false)
        setError(true)
      }
    }, [1000])
  })

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem, 
    loading,
    error,
  }
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Do sports', completed: true },
//   { text: 'clean the house', completed: false },
//   { text: 'Walk the dog', completed: false },
//   { text: 'Do homework', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

