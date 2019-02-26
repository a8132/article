import axios from 'axios'
import qs from 'querystring'

let _env_ = qs.parse(location.search.replace('?', ''))._env_

const api = axios.create({
  baseURL: _env_ || process.env.BASE_API, // api的base_url
  timeout: 30000, // request timeout
  withCredentials: false
})
export const quotaApi = axios.create({
  baseURL: _env_ || process.env.BASE_API, // api的base_url
  timeout: 30000, // request timeout
  withCredentials: false
})

// request interceptor
api.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

api.interceptors.response.use(response => {
  return response.data
})

export default api
