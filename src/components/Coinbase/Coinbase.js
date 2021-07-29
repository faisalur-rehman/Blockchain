import React, { useState, useEffect } from "react";
import { getCoinbase } from "../../api/blockchain-api";
import CoinbaseForm from "./CoinbaseForm";

const Coinbase = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const {
        data: { data },
      } = await getCoinbase();
      setData(data);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return <div>{data.length > 0 && <CoinbaseForm data={data} />}</div>;
};

export default Coinbase;
