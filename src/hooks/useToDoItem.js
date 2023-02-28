import { ToDosContext } from '@contexts/ToDosContext'
import { useRef, useContext, useEffect, useState } from 'react'

export const useToDoItem = ({ id, toDo }) => {
  const { position, description, check } = toDo
  const toDoRef = useRef(null)
  const { deleteToDo, updateToDo } = useContext(ToDosContext)

  const [hover, setHover] = useState(false)
  const [checkItem, setCheckItem] = useState(check)
  const [desc, setDesc] = useState(description)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints)
  }, [])

  useEffect(() => {
    const value = { position, description, check: checkItem }
    updateToDo(id, value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkItem])

  const setChangeToDo = () => {
    const textContent = toDoRef.current.textContent.trim()
    if (textContent === '') {
      toDoRef.current.innerHTML = description
      return setDesc(description)
    }
    setDesc(textContent)
    const value = { position, description: textContent, check: checkItem }
    updateToDo(id, value)
  }

  function handleDeleteToDo() {
    deleteToDo(id)
  }

  return {
    toDoRef,
    isTouchDevice,
    desc,
    checkItem,
    hover,
    setHover,
    setCheckItem,
    setChangeToDo,
    handleDeleteToDo,
  }
}
