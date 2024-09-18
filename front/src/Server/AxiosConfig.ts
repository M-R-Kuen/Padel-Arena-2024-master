import axios from "axios";

export const CURRENT_APP_URL = process.env.CURRENT_APP_URL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});
