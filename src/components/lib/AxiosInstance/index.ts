// import axios from "axios";

// import envConfig from "@/src/config/envConfig";

// const axiosInstance = axios.create({
//   baseURL: envConfig.baseApi,
// });

// export default axiosInstance;

import axios from "axios";
import envConfig from "@/src/config/envConfig";

// Create the axios instance
const axiosInstance = axios.create({
  baseURL:
    envConfig.baseApi ||
    "http://localhost:5000/api/auth/register" ||
    "https://backend-deply-project-fejosaufu-azir-uddins-projects.vercel.app/api/auth/register",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
