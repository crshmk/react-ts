declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

type Empty<T> = 
  T extends Array<infer U> ? [] : 
  T extends object ? {} : 
  T extends string ? '' : 
  never

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>

type NoOp = () => {}

type ObjectType = Record<string, any>

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>

type WithChildren<T = {}> = T & { children?: React.ReactNode }

