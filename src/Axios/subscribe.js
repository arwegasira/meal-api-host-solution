import axios from 'axios'

const subscribe = axios.create({
  baseURL: 'https://registersubscriber.onrender.com/api/v1',
})

export default subscribe
