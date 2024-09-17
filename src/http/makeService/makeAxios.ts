import axios from 'axios'
import { propOr } from 'ramda'

import {
  ReturnFetchedDataType
} from './http.types'

const returnFetchedData: ReturnFetchedDataType = propOr({}, 'data')

function rejectErrors(res: any) {
  return Promise.reject(res)
} 

const makeAxios = (baseURL: string) => {
  const http = axios.create({
    baseURL,
    withCredentials: true,
    // treat 400s as a failure 
    validateStatus: function (status) {
      return status >= 200 && status < 300
    }
  })

  http.interceptors.response.use(
    returnFetchedData, 
    rejectErrors
  )

  return http
}

export default makeAxios