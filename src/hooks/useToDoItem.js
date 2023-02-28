import { ToDosContext } from '@contexts/ToDosContext'
import { useContext, useEffect, useState } from 'react'

export const useToDoItem = ({ id, toDo }) => {
  const { position, description, check } = toDo
  const { deleteToDo, updateToDo } = useContext(ToDosContext)

  const [hover, setHover] = useState(false)
  const [checkItem, setCheckItem] = useState(check)
  const [desc, setDesc] = useState(description)

  useEffect(() => {
    const value = { position, description, check: checkItem }
    updateToDo(id, value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkItem])

  const setChangeToDo = () => {
    const value = { position, description: desc, check: checkItem }
    updateToDo(id, value)
  }

  function handleDeleteToDo() {
    deleteToDo(id)
  }

  const handleChangeToDo = (event) => {
    const { value } = event.target
    if (value.length === 0) return setDesc(description)
    setDesc(value)
  }

  return {
    desc,
    checkItem,
    hover,
    setHover,
    setCheckItem,
    setChangeToDo,
    handleChangeToDo,
    handleDeleteToDo,
  }
}
