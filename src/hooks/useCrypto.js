import sha256 from "crypto-js/sha256";
import { useState } from "react";
// import { useApi } from "./useAPI";

export const useCrypto = () => {
  const [blockchain, overwriteBlockchain] = useState([]);

  // const [getBlock, postBlock, getBlockchain, postBlockchain, getTokens, postTokens, getCoinbase, postCoinbase] = useApi()

  const calcHash = (nonce = "", data) => {
    return sha256(nonce + data);
  };

  return [calcHash, blockchain];
};
