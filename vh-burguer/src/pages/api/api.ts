import axios from "axios";

const apiLocal = "https://localhost:7255/";

const api = axios.create({
    baseURL: apiLocal
})

export {api};