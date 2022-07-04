import axios from "axios";

export default axios.create({
  baseURL: "https://mygadgests.live",
});

export const axiosAuthorize = axios.create({
  baseURL: "https://mygadgests.live",
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});
  