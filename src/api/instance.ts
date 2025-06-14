import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(function (config) {
  // const token = getCookie("token");

  // if (token) {
  //   config.headers["Authorization"] = `Bearer ${token}`;
  // }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => parseErrorCode(error),
);

const parseErrorCode = (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 401) {
        console.log(error)
    }
  }

};
