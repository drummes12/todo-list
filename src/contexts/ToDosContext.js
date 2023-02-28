import React, { useState } from 'react'

const ToDosContext = React.createContext()

function ToDosContextProvider({ children }) {
  const [toDos, setToDos] = useState(new Map())
  const [current, setCurrent] = useState(0)

  const loadToDosList = () => {
    const toDoListStorage = []
    const max = [0]
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key.startsWith('to-do-')) {
        max.push(Number(key.substring(6)))
        const value = JSON.parse(localStorage.getItem(key))
        toDoListStorage.push([key, value])
      }
    }
    toDoListStorage.sort(
      (toDoStorageA, toDoStorageB) =>
        toDoStorageA[1].position - toDoStorageB[1].position,
    )
    setToDos(new Map(toDoListStorage))
    setCurrent(Math.max(...max) + 1)
  }

  const addToDo = (id, toDo) => {
    const newTodos = new Map(toDos)
    newTodos.set(id, toDo)
    setToDos(newTodos)
    localStorage.setItem(id, JSON.stringify(toDo))
    setCurrent((prev) => (prev += 1))
  }

  const deleteToDo = (id) => {
    const newTodos = new Map(toDos)
    newTodos.delete(id)
    setToDos(newTodos)
    localStorage.removeItem(id)
    orderToDos(newTodos)
  }

  const updateToDo = (id, toDo) => {
    const newTodos = new Map(toDos)
    newTodos.set(id, toDo)
    setToDos(newTodos)
    localStorage.setItem(id, JSON.stringify(toDo))
  }

  const orderToDos = (newTodos) => {
    const newState = new Map()
    let position = 1
    for (const [existingKey, existingToDo] of newTodos.entries()) {
      const value = { ...existingToDo, position }
      newState.set(existingKey, value)
      localStorage.setItem(existingKey, JSON.stringify(value))
      position += 1
    }
  }

  return (
    <ToDosContext.Provider
      value={{
        toDos,
        current,
        loadToDosList,
        addToDo,
        deleteToDo,
        updateToDo,
        orderToDos,
      }}>
      {children}
    </ToDosContext.Provider>
  )
}

export { ToDosContext, ToDosContextProvider }
