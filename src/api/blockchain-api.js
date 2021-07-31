import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/blockchain",
});

export function getBlock() {
  return api.get(`/block`);
}

export function getBlockChain() {
  return api.get(`/blockchain`);
}

export function getTokens() {
  return api.get(`/token`);
}

export function getCoinbase() {
  return api.get(`/coinbase`);
}
export function postBlock(data) {
  return api.post(`/mine`, data);
}
