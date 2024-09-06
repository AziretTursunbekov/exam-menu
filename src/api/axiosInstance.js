import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fc60f39987959a31.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
