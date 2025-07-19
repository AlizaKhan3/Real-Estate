import axios from "axios"

const BaseURL = "http://localhost:8000/auth"
const BaseURLProducts = "http://localhost:8000/properties"

export const axiosInstance = axios.create({
    baseURL: BaseURL
})


export const axiosInstanceProperty = axios.create({
    baseURL: BaseURLProducts
})
