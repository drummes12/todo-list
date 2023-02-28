import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  TrashIcon,
  CheckIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

export const Item = ({ id, toDo, setToDoList }) => {
  const { position, description, check } = toDo

  const [hover, setHover] = useState(false)
  const [checkItem, setCheckItem] = useState(check)
  const [desc, setDesc] = useState(description)

  useEffect(() => {
    const value = { position, description, check: checkItem }
    localStorage.setItem(id, JSON.stringify(value))
    setToDoList((prev) => {
      const newState = new Map(prev)
      newState.set(id, value)
      return newState
    })
  }, [checkItem, position, description, id, setToDoList])

  const setChangeToDo = () => {
    const value = { position, description: desc, check: checkItem }
    localStorage.setItem(id, JSON.stringify(value))
    setToDoList((prev) => {
      const newState = new Map(prev)
      newState.set(id, value)
      return newState
    })
  }

  function deleteToDo() {
    localStorage.removeItem(id)
    setToDoList((prev) => {
      const newState = new Map(prev)
      newState.delete(id)
      let position = 1
      for (const [existingKey, existingToDo] of newState.entries()) {
        const value = { ...existingToDo, position }
        newState.set(existingKey, value)
        localStorage.setItem(existingKey, JSON.stringify(value))
        position += 1
      }
      return newState
    })
  }

  const handleChangeToDo = (event) => {
    const { value } = event.target
    if (value.length === 0) return setDesc(description)
    setDesc(value)
  }

  return (
    <li className='py-1'>
      <div
        className='relative w-full h-12 text-white flex flex-row justify-between items-center p-2 overflow-hidden bg-opacity-5 bg-blur rounded-xl shadow-[-1px_-1px_10px_rgba(0,0,0,0.2)] hover:shadow-[inset_-1px_-1px_10px_rgba(0,0,0,0.2)] transition-colors duration-500'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <svg
          className={`absolute -z-20 top-0 left-0 transition-all h-full ${
            checkItem ? 'w-full' : 'w-0'
          }`}
          aria-hidden='true'>
          <rect
            x='0'
            y='0'
            width='100%'
            height='100%'
            fill='green'
            fillOpacity='0.2'
          />
        </svg>
        {hover && !checkItem && (
          <div className='flex flex-none justify-start mx-2'>
            <button
              type='button'
              className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
              onClick={() => setCheckItem(!checkItem)}>
              <span className='sr-only'>Check</span>
              <CheckCircleIcon
                className='h-5 w-5 text-white/10 hover:text-green-700'
                aria-hidden='true'
              />
            </button>
          </div>
        )}
        {checkItem && (
          <div className='flex flex-none justify-start mx-2'>
            <button
              type='button'
              className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
              onClick={() => setCheckItem(!checkItem)}>
              <span className='sr-only'>Check</span>
              <CheckIcon
                className='h-5 w-5 text-green-700 hover:text-green-300'
                aria-hidden='true'
              />
            </button>
          </div>
        )}
        <label htmlFor={id} className='sr-only'>
          {description}
        </label>
        <input
          id={id}
          name={id}
          type='text'
          className='min-w-0 flex-auto rounded-md bg-transparent border-none px-3.5 py-2 text-white'
          value={desc}
          onChangeCapture={handleChangeToDo}
          onBlur={setChangeToDo}
        />
        <div className='flex flex-none justify-end mx-2'>
          <button
            type='button'
            className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
            onClick={deleteToDo}>
            <span className='sr-only'>Dismiss</span>
            <TrashIcon
              className='h-5 w-5 text-white/10 hover:text-red-800'
              aria-hidden='true'
            />
          </button>
        </div>
      </div>
    </li>
  )
}

Item.propTypes = {
  toDo: PropTypes.object,
  toDoList: PropTypes.array,
  setToDoList: PropTypes.func,
}
