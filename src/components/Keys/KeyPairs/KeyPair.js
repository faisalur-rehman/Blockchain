import React, { useState, useEffect } from "react";
import { generateKey, getKey } from "../../../api/keys-api";
import KeyPairsForm from "./KeyPairForm";

const KeyPair = () => {
  const [data, setData] = useState();
  const [privateKey, setPrivateKey] = useState();
  const [publicKey, setpublicKey] = useState();
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getKey();
      setPrivateKey(data.private);
      setpublicKey(data.public);
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);

  function handlePrivateChange(value) {
    setPrivateKey(value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const {
        data: { data },
      } = await generateKey(privateKey);
      console.log("returned key", data);
      setpublicKey(data.public_key);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      {data && (
        <KeyPairsForm
          data={data}
          privateKey={privateKey}
          publicKey={publicKey}
          handleChange={handlePrivateChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default KeyPair;
