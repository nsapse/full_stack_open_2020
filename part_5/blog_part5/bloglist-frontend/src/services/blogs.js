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
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const request =  axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data )
}

const deleteOne = async (id) => {
  console.log(`Deleting blog id: ${id}`)
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  console.log('Response is', response)
  return response.data
}

export default { getAll,
  create,
  setToken,
  update,
  deleteOne,
}
