import React, { useState, useEffect } from "react";
import { getKey, postSignature } from "../../../api/keys-api";
import SignatureForm from "./SignatureForm";

const Signature = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [signature, setSignature] = useState();
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

  function handleMessage(value) {
    setMessage(value);
  }
  async function handleSubmit() {
    try {
      const {
        data: { data },
      } = await postSignature({ private_key: privateKey, message });
      setSignature(data.signature);
      console.log("sign data", data);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      {data && (
        <SignatureForm
          privateKey={privateKey}
          handleChange={handleMessage}
          handleSubmit={handleSubmit}
          signature={signature}
        />
      )}
    </div>
  );
};

export default Signature;
