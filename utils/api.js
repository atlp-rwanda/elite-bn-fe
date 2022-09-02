import axios from 'axios'

const token = localStorage.getItem('jwt')

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
   jwt: `${token}`,
    'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL
  },
})
 