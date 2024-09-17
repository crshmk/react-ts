// watch for enter key
// onKeyPress={onKeyPressEnter(cb)}
import React from 'react'

type SideEffectType = () => void 

type EventHandlerType<T> = (e: React.KeyboardEvent<T>) => void 

type OnKeyDownEnter = <T extends HTMLElement>(cb: SideEffectType) => EventHandlerType<T>

const onKeyDownEnter: OnKeyDownEnter = cb => e => {
    if (e.key === 'Enter') {
      cb()
    }
  }

export default onKeyDownEnter
