import axios from "axios";

//let apiURL = "http://localhost:3333";
let apiURL = "https://bfh-good-reads.herokuapp.com/";
const api = axios.create({
  baseURL: apiURL,
});

export default api;
