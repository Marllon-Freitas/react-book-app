import axios from "axios";

const BASE_URL = "http://localhost:3000";

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});

export default http;