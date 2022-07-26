import axios from 'axios'

const token = localStorage.getItem('token')

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL,
  },
})
