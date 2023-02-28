import optionsParticles from '@assets/particles.js'
import { List } from '@components/List'
import { ToDosContextProvider } from '@contexts/ToDosContext'
import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function Home() {
  const [visibleHeight, setVisibleHeight] = useState(window.innerHeight)

  useEffect(() => {
    function handleResize() {
      const browserHeight = window.outerHeight
      const visibleHeight = browserHeight - window.innerHeight
      setVisibleHeight(browserHeight - visibleHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div
      className='fixed isolate grid overscroll-none place-content-center w-full overflow-hidden bg-gray-900'
      style={{ height: `${visibleHeight}px` }}>
      <Particles
        className='-z-10'
        id='tsparticles'
        init={particlesInit}
        options={optionsParticles}
      />
      <Head>
        <title>To Do List</title>
        <meta name='description' content='To Do List by Drummes12' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
        <link rel='icon' type='image/png' href='/favicon.png' />
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
      <span className='absolute bottom-4 w-full text-center text-white text-xs'>
        Created by Drummes12.
      </span>
    </div>
  )
}
