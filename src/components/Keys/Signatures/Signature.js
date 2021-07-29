import React, { useState, useEffect } from "react";
import { getKey } from "../../../api/keys-api";
import SignatureForm from "./SignatureForm";

const Signature = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getKey();
      setPrivateKey(data.private);
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);
  console.log("data", data);

  return <div>{data && <SignatureForm privateKey={privateKey} />}</div>;
};

export default Signature;
