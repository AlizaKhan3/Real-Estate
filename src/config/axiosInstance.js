import axios from "axios"

const BaseURL = "https://realestate-properties-backend.onrender.com/auth"
const BaseURLProducts = "https://realestate-properties-backend.onrender.com/properties"
// https://realestate-properties-backend.onrender.com
// http://localhost:8000/

export const axiosInstance = axios.create({
    baseURL: BaseURL
})


export const axiosInstanceProperty = axios.create({
    baseURL: BaseURLProducts
})
