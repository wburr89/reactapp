import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization:
      "Client-ID 3337beecd7c05eea4e64d0278908a8b63bb880314dc26bf9fdd7c72cb2894974"
  }
});
