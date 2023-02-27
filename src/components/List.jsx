import { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { Item } from '@components/Item'

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

  const handleKeyToDoNew = (event) => {
    const { code, target } = event
    if (target.value.length !== 0 && code === 'Enter') addToDo()
  }

  const addToDo = () => {
    const list = toDoList
    list.push({ id: `to-do-${list.length}`, toDo: toDoNew, check: false })
    setToDoList(list)
    setToDoNew('')
  }

  return (
    <div className='flex flex-col h-96 w-96  p-4 shadow-2xl rounded-3xl bg-slate-200 bg-opacity-5 backdrop-blur-md'>
      <div className='flex items-center gap-x-4 p-4 mb-4 shadow-[inset_-1px_-1px_8px_rgba(0,0,0,0.4),inset_1px_1px_9px_rgba(75,75,75,0.4)] rounded-2xl'>
        <div className='flex flex-col flex-1'>
          <label htmlFor='to-do-new' className='sr-only'>
            To Do
          </label>
          <input
            id='to-do-new'
            name='to-do'
            type='text'
            className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6'
            placeholder='To Do'
            value={toDoNew}
            onChange={handleChangeToDoNew}
            onKeyDown={handleKeyToDoNew}
          />
        </div>
        <button
          className='rounded-full p-2'
          disabled={disabledBtn}
          onClick={addToDo}>
          <span className='sr-only'>Add To Do</span>
          <PlusCircleIcon
            className='h-5 w-5 text-white/10 hover:text-[#E935C1] hover:animate-pulse'
            aria-hidden='true'
          />
        </button>
      </div>
      <div className='overflow-y-auto w-full h-full px-2 py-1'>
        <ul>
          {toDoList.map((toDo) => (
            <Item
              toDo={toDo}
              key={`to-do-${toDo.id}`}
              toDoList={toDoList}
              setToDoList={setToDoList}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
