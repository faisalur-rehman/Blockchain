import React, { useState, useEffect } from "react";
import { getKey } from "../../../api/keys-api";
import KeyPairsForm from "./KeyPairForm";

const KeyPair = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getKey();
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);

  console.log("data", data);
  return <div>{data && <KeyPairsForm data={data} />}</div>;
};

export default KeyPair;
