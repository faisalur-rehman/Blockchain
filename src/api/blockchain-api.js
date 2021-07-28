// import { api } from "./index";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/blockchain",
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

const fileConfig = {
  headers: {
    Authorization: localStorage.getItem("token"),
    "Content-Type": "multipart/form-data",
  },
};

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
export function signIn(data) {
  return api.post("/user/login", { ...data });
}
export function userProfile() {
  return api.get("/user/profile", config);
}

export function addNewProduct(data) {
  return api.post("/product/add", data, fileConfig);
}
export function getAllProducts() {
  return api.get("/product/user-get-all", config);
}
export function adminAllProducts() {
  return api.get("/product/admin-get-all", config);
}
export function getSingleProduct(id) {
  return api.post("/product/get-single", { productId: id }, config);
}
export function rentProduct(data) {
  return api.post("/rental-history/add", { ...data }, config);
}
export function getVendorRentHistory() {
  return api.get("/rental-history/vendor-get", config);
}
export function getRenterRentHistory() {
  return api.get("/rental-history/renter-get", config);
}
export function getAllRentHistory() {
  return api.get("/rental-history/admin-get", config);
}
export function searchProduct(data) {
  return api.post("/product/search", { ...data }, config);
}
