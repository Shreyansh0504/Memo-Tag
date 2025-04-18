import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api",
});

export const joinWaitlist = (email) => API.post("/waitlist", { email });
export const getWaitlist = () => API.get("/waitlist");
