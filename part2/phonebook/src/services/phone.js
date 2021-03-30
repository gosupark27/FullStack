import axios from 'axios'

// Relative url since front and backend are both on same address
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = async () => {
    const request = await axios
                          .get(baseUrl)
                          .then(response => response.data)
    return request
}

const create = async (newObj) => {
    const request = await axios
                          .post(baseUrl, newObj)
                          .then(response => response.data)
    return request
}

const update = async (id, newObj) => {
    const request = await axios
                          .put(`${baseUrl}/${id}`, newObj)
                          .then(response => response.data)
    return request
}

const del = async (id) => {
    const request = await axios
                          .delete(`${baseUrl}/${id}`)
                          .then(response => response.data)
    return request
}
// To avoid eslint warning: 'Assign object to a variable before exporting as module default' 
const personService = {getAll, create, update, del}

export default personService