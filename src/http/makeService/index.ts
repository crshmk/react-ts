import qs from 'qs'
import makeAxios from './makeAxios'

/**
 * Create an http service for an api
 * @param {string} baseURL 
 * 
 * type RequestMethod = (path: string, payload?: {any}) => Promise
 * @returns { 
 *   get: RequestMethod, 
 *   post: RequestMethod, 
 *   put: RequestMethod, 
 *   delete: RequestMethod 
 * }
 */
const makeService = (baseURL: string) => {
  const http = makeAxios(baseURL)

  const get = (route: string, payload?: ObjectType) => {
    const params = qs.stringify(payload)
    return http.get(`${route}?${params}`)
  }

  return {
    get, 
    post: http.post, 
    put: http.put, 
    delete: http.delete
  }
}

export default makeService
  