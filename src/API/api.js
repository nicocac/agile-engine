import axios from 'axios'

export default axios.create({
  baseURL: 'http://interview.agileengine.com',
  timeout: 500000,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [function (data) {
    return data
  }],
  transformResponse: [function (data) {
    return data
  }]
})
