import optionsParticles from '@assets/particles.js'
import { List } from '@components/List'
import { ToDosContextProvider } from '@contexts/ToDosContext'
import Head from 'next/head'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className='grid relative isolate place-content-center h-screen w-screen overflow-hidden bg-gray-900'>
      <Particles
        className='-z-10'
        id='tsparticles'
        init={particlesInit}
        options={optionsParticles}
      />
      <Head>
        <title>To Do List</title>
        <meta name='description' content='To Do List by Drummes12' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute [mask-image:radial-gradient(closest-side,white,transparent)] -z-20'
        aria-hidden='true'>
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.7'></circle>
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#7775D6'></stop>
            <stop offset='1' stopColor='#E935C1'></stop>
          </radialGradient>
        </defs>
      </svg>
      <ToDosContextProvider>
        <List />
      </ToDosContextProvider>
    </div>
  )
}
