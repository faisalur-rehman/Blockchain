import React, { useEffect, useState } from "react";
import { getKeyBlockchain } from "../../../api/keys-api";
import BlockchainForm from "./BlockchainForm";

const KeyBlockchain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getKeyBlockchain();
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);

  console.log("data", data);
  return <div>{data.length > 0 && <BlockchainForm data={data} />}</div>;
};

export default KeyBlockchain;
