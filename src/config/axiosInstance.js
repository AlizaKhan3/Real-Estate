import axios from "axios"

const BaseURL = "http://localhost:8000/auth"

export const axiosInstance = axios.create({
    baseURL: BaseURL
})

