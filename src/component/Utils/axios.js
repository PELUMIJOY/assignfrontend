import axios from "axios"

const baseUrl= 'https://basic-app-backend.onrender.com'


export const apiPost = (path, data) => {
    const config = {
        headers:{
            Authorization:`Bearer ${localStorage.getItem('signature')}`
        }
    }
    console.log("base url is ", baseUrl)
    return axios.post(`${baseUrl}${path}`, data, config)
}


export const apiGet = (path) => {
    const config = {
        headers:{
            Authorization:`Bearer ${localStorage.getItem('signature')}`
        }
    }

    return axios.get(`${baseUrl}${path}`,config)
}