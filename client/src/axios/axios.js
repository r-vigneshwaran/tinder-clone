import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-server-side.herokuapp.com'
})

export default instance;