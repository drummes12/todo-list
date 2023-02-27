import { useState } from 'react'
import PropTypes from 'prop-types'

export const List = () => {
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [toDoNew, setToDoNew] = useState('')
  const [toDoList, setToDoList] = useState([])

  const handleChangeToDoNew = (event) => {
    const { value } = event.target
    if (value.length === 0) setDisabledBtn(true)
    else setDisabledBtn(false)
    setToDoNew(value)
  }

  const addToDo = () => {
    const list = toDoList
    list.push({ id: `to-do-${list.length}`, toDo: toDoNew })
    setToDoList(list)
    setToDoNew('')
  }

  const deleteToDo = (id) => {
    const list = toDoList.filter((toDo) => toDo.id !== id)
    setToDoList(list)
  }

  return (
    <div className='flex flex-col h-96 w-96 bg-red-300 p-4'>
      <div className='w-full flex justify-between align-middle'>
        <div className='flex flex-col'>
          <label htmlFor='to-do-new'>Add To Do:</label>
          <input
            type='text'
            id='to-do-new'
            value={toDoNew}
            onChange={handleChangeToDoNew}
          />
        </div>
        <button disabled={disabledBtn} onClick={addToDo}>
          Add
        </button>
      </div>
      <ul className='bg-slate-900 overflow-x-hidden w-full h-full'>
        {toDoList.map((toDo) => (
          <li
            className='w-full h-fit text-white flex flex-row justify-between'
            key={`to-do-${toDo.id}`}>
            <span>{toDo.toDo}</span>
            <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

List.propTypes = {}
