import axios from "axios";
// instance of axios
export const jsonplaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  method: "get",
});

// Add a request interceptor
jsonplaceholder.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Request Interceptor");
    console.log(config);
    config.headers.test = "I am only a header!";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
jsonplaceholder.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log("Response Interceptor");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
