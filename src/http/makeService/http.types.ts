import { AxiosResponse } from 'axios'

export type ApiResponse = {
  data: any 
}

export type ReturnFetchedDataType<T = any> = (response: AxiosResponse) => T
