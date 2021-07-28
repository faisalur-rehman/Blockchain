import axios from "axios";

const baseURL = `http://localhost:8000/blockchain`; // TODO

export const useApi = () => {
  const getBlock = () => {
    return axios.get(`${baseURL}/block`);
  };

  const postBlock = (block) => {
    return axios.post(`${baseURL}/mine`, { ...block });
  };

  const getBlockchain = () => {
    return axios.get(`${baseURL}/blockchain`);
  };

  const postBlockchain = (mine_index, blockchain) => {};

  const getTokens = () => {
    console.log("inside token");
    return axios.get(`${baseURL}/token`);
  };

  const postTokens = (mine_index, blockchain) => {};

  const getCoinbase = () => {};

  const postCoinbase = (mine_index, blockchain) => {};

  return [
    getBlock,
    postBlock,
    getBlockchain,
    postBlockchain,
    getTokens,
    postTokens,
    getCoinbase,
    postCoinbase,
  ];
};
