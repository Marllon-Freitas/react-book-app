import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/";
const API_KEY = process.env.REACT_APP_API_SECRET_KEY;

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `${API_KEY}`,
  },
});

export default http;
