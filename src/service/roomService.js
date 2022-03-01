import Axios from "../libs/Axios.js";

const roomService = {
    getAll : () => {
        return Axios.get('/rooms')
    },
    getById : (id) => {
        return Axios.get(`/rooms/${id}`)
    },
    create : (data) => {
        return Axios.post('/rooms',data)
    },
    delete : (id) => {
        return Axios.delete(`/rooms/${id}`)
    },
    update : (id,data) => {
        return Axios.put(`/rooms/${id}`,data)
    }
}

export default roomService