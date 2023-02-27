import { useState } from 'react'
import PropTypes from 'prop-types'
import { PlusCircleIcon, TrashIcon, CheckIcon } from '@heroicons/react/20/solid'

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
    <div className='flex flex-col h-96 w-96  p-4 shadow-2xl rounded-3xl bg-blur-lg bg-slate-200 bg-opacity-5'>
      <div className='flex items-center gap-x-4 p-4 mb-4 shadow-[inset_-1px_-1px_8px_rgba(0,0,0,0.4),inset_1px_1px_9px_rgba(75,75,75,0.4)] rounded-2xl'>
        <div className='flex flex-col flex-1'>
          <label for='to-do-new' class='sr-only'>
            To Do
          </label>
          <input
            id='to-do-new'
            name='to-do'
            type='text'
            class='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
            placeholder='To Do'
            value={toDoNew}
            onChange={handleChangeToDoNew}
          />
        </div>
        <button
          class='rounded-full p-2'
          disabled={disabledBtn}
          onClick={addToDo}>
          <span className='sr-only'>Add To Do</span>
          <PlusCircleIcon
            className='h-5 w-5 text-indigo-700 hover:text-indigo-300 hover:animate-pulse'
            aria-hidden='true'
          />
        </button>
      </div>
      <div className='overflow-y-auto w-full h-full px-2 py-1'>
        <ul>
          {toDoList.map((toDo) => (
            <li className='py-1' key={`to-do-${toDo.id}`}>
              <div className='w-full h-12 text-white flex flex-row justify-between items-center p-2 overflow-hidden bg-opacity-5 bg-blur rounded-xl shadow-[-1px_-1px_10px_rgba(0,0,0,0.2)] hover:bg-zinc-700 hover:bg-opacity-5 hover:shadow-[inset_-1px_-1px_10px_rgba(0,0,0,0.2)]'>
                <div className='flex flex-none justify-start mx-2'>
                  <button
                    type='button'
                    className='-m-3 p-3 focus-visible:outline-offset-[-4px]'>
                    <span className='sr-only'>Check</span>
                    <CheckIcon
                      className='h-5 w-5 text-green-700 hover:text-green-300'
                      aria-hidden='true'
                    />
                  </button>
                </div>
                <span className='flex-1 mx-2'>{toDo.toDo}</span>
                <div className='flex flex-none justify-end mx-2'>
                  <button
                    type='button'
                    className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
                    onClick={() => deleteToDo(toDo.id)}>
                    <span className='sr-only'>Dismiss</span>
                    <TrashIcon
                      className='h-5 w-5 text-red-700 hover:text-red-300'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

List.propTypes = {}
