import axios from 'axios'

export function getMessage() {
  return axios.get('http://localhost:3001/api/message').then(res => {
    return res.data
  })
}