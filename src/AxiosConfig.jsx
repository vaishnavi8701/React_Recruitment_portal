import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: "/api/",
    "proxy": {
        "/api/*":  {
          "target": "http://localhost:8000",
          "secure": false
        }
      },
});

export default AxiosConfig;
