import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
  console.log(`token set to ${token}`)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
  

const create = async (newObject, header) => {
  const config = {
    headers: {Authorization: token}
  }
  const response = await axios.post(baseUrl, newObject,config)
  return response.data
}

export default { getAll, create, setToken }