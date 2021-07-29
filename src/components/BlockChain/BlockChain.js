import React, { useEffect, useState } from "react";
import { getBlockChain } from "../../api/blockchain-api";
import { useCrypto } from "../../hooks/useCrypto";
import BlockChainForm from "./BlockChainForm";

const BlockChain = ({ calcHash }) => {
  // const [calcHash] = useCrypto();

  const [data, setData] = useState([]);
  const [hash, setHash] = useState(calcHash(12));
  const [hashValues, setHashValues] = useState([]);

  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getBlockChain();
      data.map((item) => setHashValues((prev) => [...prev, item.hash]));
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);

  function handleChange(value, index) {
    console.log("value", value);
    // console.log(calcHash(value));
  }

  console.log("data", hash);

  return (
    <div>
      {data.length > 0 && hashValues.length > 0 && (
        <BlockChainForm
          data={data}
          hashValues={hashValues}
          handleChange={handleChange}
          hash={hash}
        />
      )}
    </div>
  );
};

export default BlockChain;
