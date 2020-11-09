import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5001/uaifood-909ae/us-central1/app/api/v1",
  headers: {
    "Content-type": "application/json"
  },
  responseType: "json"
});