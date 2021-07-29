import axios from "axios";

const keyApi = axios.create({
  baseURL: "http://localhost:8000/keys",
});

export function getKey() {
  return keyApi.get(`/key`);
}
export function getKeyBlockchain() {
  return keyApi.get(`/blockchain`);
}