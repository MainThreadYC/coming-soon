import axios from "axios";

const emailsApi = axios.create({
  baseURL: "/api",
});

export default emailsApi;
