import React from 'react'
import { isAbsent } from 'ramjam' 

import './home.css'

import sunbeam from '@img/sunbeam.jpeg'

import useMessage from '@store/useMessage'
import useMainProcess from '@store/useMainProcess'

import FadeIn from '@components/FadeIn'


const ElectronTest = () => {
  const { ipcMessage, pingIpc} = useMainProcess()

   return !window?.ipc ? null : (
    <>
      <button onClick={pingIpc}>ping main process</button>
        <p>{ipcMessage}</p>
    </>
  )
} 

const ErrorMessage = () => {
  const { errorMessage } = useMessage()
  return isAbsent(errorMessage) ? null : <p>{errorMessage}</p>
}

const Home = () => {
  return (
    <FadeIn>
    <div className="home">
      <img src={sunbeam} />
      <ErrorMessage />
      <ElectronTest />
    </div>
    </FadeIn>
  )
}

export default Home