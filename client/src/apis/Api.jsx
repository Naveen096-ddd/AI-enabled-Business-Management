import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export const api = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const clearAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
}

export const getUser = () => {
  return axios.get(`${API_URL}api/user/`);
};

export const createUser = (data) => {
  return axios.post(`${API_URL}api/user/`, data);
};

export const updateUser = (data) => {
  return axios.put(`${API_URL}api/user/`, data);
};
