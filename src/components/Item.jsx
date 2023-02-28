import PropTypes from 'prop-types'
import {
  TrashIcon,
  CheckIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import { useToDoItem } from '@hooks/useToDoItem'

export const Item = ({ id, toDo }) => {
  const {
    desc,
    checkItem,
    hover,
    setHover,
    setCheckItem,
    setChangeToDo,
    handleChangeToDo,
    handleDeleteToDo,
  } = useToDoItem({ id, toDo })

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
          {desc}
        </label>
        <input
          id={id}
          name={id}
          type='text'
          className='min-w-0 flex-auto rounded-md bg-transparent border-none px-3.5 py-2 text-white'
          value={desc}
          onChange={handleChangeToDo}
          onBlur={setChangeToDo}
        />
        <div className='flex flex-none justify-end mx-2'>
          <button
            type='button'
            className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
            onClick={handleDeleteToDo}>
            <span className='sr-only'>Delete</span>
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
