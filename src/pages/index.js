import Head from 'next/head'
import { List } from '@components/List'

export default function Home() {
  return (
    <div className='grid place-content-center h-screen w-screen overflow-hidden bg-slate-800'>
      <Head>
        <title>To Do List</title>
        <meta name='description' content='To Do List by Drummes12' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <List />
    </div>
  )
}
