import router from '../router/router'
import store from '../store'

export default function setup (axios) {
  axios.interceptors.request.use( (config => {
    console.log(store.state.credentials.token)
    config.headers.Authorization = 'Bearer ' + store.state.credentials.token
    return config
  }), err => {
    return Promise.reject(err)
  })
  axios.interceptors.response.use(undefined, err => {
    router.push({path: '/error', query: {code: '500', message: err.message}})
    throw err
  })
}
