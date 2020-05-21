import axios from "axios";

export default axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
});