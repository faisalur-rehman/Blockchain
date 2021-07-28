import React, { useEffect, useState } from "react";
import { getBlockChain } from "../../api/blockchain-api";
import BlockChainForm from "./BlockChainForm";

const BlockChain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getBlockChain();
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);
  console.log("data", data);
  return <div>{data.length > 0 && <BlockChainForm data={data} />}</div>;
};

export default BlockChain;
