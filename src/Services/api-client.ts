import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "924372c89e30492e8f2b373a4d802b6e",
  },
});
