import Head from 'next/head'
import { List } from '@components/List'

export default function Home() {
  return (
    <div className='grid relative isolate place-content-center h-screen w-screen overflow-hidden  bg-gray-900'>
      <Head>
        <title>To Do List</title>
        <meta name='description' content='To Do List by Drummes12' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <svg
        viewBox='0 0 1024 1024'
        class='absolute [mask-image:radial-gradient(closest-side,white,transparent)] -z-10'
        aria-hidden='true'>
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fill-opacity='0.7'></circle>
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stop-color='#7775D6'></stop>
            <stop offset='1' stop-color='#E935C1'></stop>
          </radialGradient>
        </defs>
      </svg>
      <List />
    </div>
  )
}
