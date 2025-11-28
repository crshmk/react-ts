import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'

type MainProcessContextType = {
  callBashScript: () => void
  ipcMessage: string
  pingIpc: () => void
  stdErr: string
  stdOut: string
}

const initContext = {
  callBashScript: () => {},
  ipcMessage: '',
  pingIpc: () => {},
  stdErr: '',
  stdOut: ''
}

export const MainProcessContext = createContext<MainProcessContextType>(initContext)
const useStore = () => useContext(MainProcessContext)

export const MainProcessProvider = props => {
  const [ipcMessage, setIpcMessage] = useState('')
  const [stdOut, setStdOut] = useState('')
  const [stdErr, setStdErr] = useState('')

  if(!window?.ipc) return props.children

  const pingIpc = () => {
    window.ipc.send('to-main', 'Payload to Main')
  }

  const callBashScript = () => {
    window.ipc.send('call-bash-script')
  }

  useEffect(() => {
    const cleanupPing = window.ipc.receive('from-main', setIpcMessage)
    const cleanupStdOut = window.ipc.receive('std-out-from-bash-script', setStdOut)
    const cleanupStdErr = window.ipc.receive('std-err-from-bash-script', setStdErr)

    return () => {
      cleanupPing()
      cleanupStdErr()
      cleanupStdOut()
    }
  }, [])

  const ctx = { callBashScript, ipcMessage, pingIpc, stdErr, stdOut }

  return (
    <MainProcessContext.Provider value={ctx}>
      {props.children}
    </MainProcessContext.Provider>
  )
}

export default useStore