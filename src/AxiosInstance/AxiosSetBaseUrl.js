import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://mygadgests.live",
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
})