import { NextPage } from 'next'
import React from 'react'
import Pools from './_components/Pools'
import { StateProvider } from './context/stateContext'

const Page: NextPage = () => {
  return (
    <div className='w-full p-4 overflow-hidden'>
      <StateProvider>
        <Pools />
      </StateProvider>
    </div>
  )
}

export default Page