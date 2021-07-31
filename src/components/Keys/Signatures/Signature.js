import React, { useState, useEffect } from "react";
import { getKey, postSignature, verifySignature } from "../../../api/keys-api";
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

  function handleMessage(value) {
    setMessage(value);
  }
  async function handleSubmit() {
    try {
      const {
        data: { data },
      } = await postSignature({ private_key: privateKey, message });
      setSignature(data.signature);
    } catch (error) {
      console.log(error.response);
    }
  }
  async function handleVerifySubmit() {
    try {
      const {
        data: { data },
      } = await verifySignature({ public_key: privateKey, message, signature });
      setSignature(data.signature);
      console.log("verified data", data);
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
          message={message}
          handleVerifySubmit={handleVerifySubmit}
        />
      )}
    </div>
  );
};

export default Signature;
