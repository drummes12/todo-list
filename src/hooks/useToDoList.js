import { ToDosContext } from '@contexts/ToDosContext'
import { useContext, useState, useEffect } from 'react'

export const useToDoList = () => {
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [toDoNew, setToDoNew] = useState('')
  const { toDos, current, loadToDosList, addToDo } = useContext(ToDosContext)

  useEffect(() => {
    loadToDosList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangeToDoNew = (event) => {
    const { value } = event.target
    if (value.length === 0) setDisabledBtn(true)
    else setDisabledBtn(false)
    setToDoNew(value)
  }

  const handleKeyToDoNew = (event) => {
    const { code, target } = event
    if (target.value.length !== 0 && code === 'Enter') handleAddToDo()
  }

  const handleAddToDo = () => {
    const key = `to-do-${current}`
    const value = {
      position: toDos.size + 1,
      description: toDoNew,
      check: false,
    }
    addToDo(key, value)
    setToDoNew('')
  }

  return {
    disabledBtn,
    toDoNew,
    toDos,
    handleChangeToDoNew,
    handleKeyToDoNew,
    handleAddToDo,
  }
}
