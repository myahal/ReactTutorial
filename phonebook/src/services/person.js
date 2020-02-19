import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = person => {
    return axios.post(baseUrl, person)
        .then(response => response.data)
}

const getAll = () => {
    const p = { name: 'not server', number: '2222', id: 100 }
    return axios.get(baseUrl)
        .then(response => response.data.concat(p))
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => console.log(response))
}

const update = (id, person) => {
    return axios.put(`${baseUrl}/${id}`, person)
        .then(response => response.data)
}

export default { getAll, create, deletePerson, update }