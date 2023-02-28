import { Item } from '@components/Item'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { useToDoList } from '@hooks/useToDoList'

export const List = () => {
  const {
    disabledBtn,
    toDoNew,
    toDos,
    handleChangeToDoNew,
    handleKeyToDoNew,
    handleAddToDo,
  } = useToDoList()

  return (
    <div className='flex flex-col max-h-[calc(100vh_-_10rem)] lg:w-96 md:w-96 sm:w-[calc(100vw_-_10rem)] w-[calc(100vw_-_4rem)] p-4 shadow-2xl rounded-3xl bg-slate-200 bg-opacity-5 backdrop-blur-md'>
      <div className='flex items-center gap-x-4 p-4 mb-4 shadow-[inset_-1px_-1px_8px_rgba(0,0,0,0.4),inset_1px_1px_9px_rgba(75,75,75,0.4)] rounded-2xl'>
        <div className='flex flex-col flex-1'>
          <label htmlFor='to-do-new' className='sr-only'>
            {toDoNew}
          </label>
          <input
            id='to-do-new'
            name='to-do'
            type='text'
            className='w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-800 sm:text-sm sm:leading-6'
            placeholder='To Do'
            value={toDoNew}
            onChange={handleChangeToDoNew}
            onKeyDown={handleKeyToDoNew}
          />
        </div>
        <button
          className='rounded-full p-2'
          disabled={disabledBtn}
          onClick={handleAddToDo}>
          <span className='sr-only'>Add To Do</span>
          <PlusCircleIcon
            className='h-5 w-5 text-white/10 hover:text-[#E935C1] hover:animate-pulse'
            aria-hidden='true'
          />
        </button>
      </div>
      <div className='overflow-y-auto w-full h-full px-2 py-1'>
        <ul>
          {Array.from(toDos || [], ([key, toDo]) => (
            <Item key={key} id={key} toDo={toDo} />
          ))}
        </ul>
      </div>
    </div>
  )
}
