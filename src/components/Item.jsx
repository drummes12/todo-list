import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  TrashIcon,
  CheckIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'

export const Item = ({ toDo, toDoList, setToDoList }) => {
  const [hover, setHover] = useState(false)
  const [check, setCheck] = useState(false)


  const deleteToDo = (id) => {
    const list = toDoList.filter((toDo) => toDo.id !== id)
    setToDoList(list)
  }

  return (
    <li className='py-1'>
      <div
        className='relative w-full h-12 text-white flex flex-row justify-between items-center p-2 overflow-hidden bg-opacity-5 bg-blur rounded-xl shadow-[-1px_-1px_10px_rgba(0,0,0,0.2)] hover:shadow-[inset_-1px_-1px_10px_rgba(0,0,0,0.2)] transition-colors duration-500'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <svg
          className={`absolute -z-20 top-0 left-0 transition-all h-full ${
            check ? 'w-full' : 'w-0'
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
        {hover && !check && (
          <div className='flex flex-none justify-start mx-2'>
            <button
              type='button'
              className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
              onClick={() => setCheck(!check)}>
              <span className='sr-only'>Check</span>
              <CheckCircleIcon
                className='h-5 w-5 text-white/10 hover:text-green-700'
                aria-hidden='true'
              />
            </button>
          </div>
        )}
        {check && (
          <div className='flex flex-none justify-start mx-2'>
            <button
              type='button'
              className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
              onClick={() => setCheck(!check)}>
              <span className='sr-only'>Check</span>
              <CheckIcon
                className='h-5 w-5 text-green-700 hover:text-green-300'
                aria-hidden='true'
              />
            </button>
          </div>
        )}
        <span className='flex-1 mx-2'>{toDo.toDo}</span>
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
