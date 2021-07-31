import React, { useState, useEffect } from "react";
import { getKey, postSignature, verifySignature } from "../../../api/keys-api";
import TransactionForm from "./TransactionForm";

const Transaction = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [signature, setSignature] = useState();
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getKey();
      setPrivateKey(data.private);
      setData(data);
      setPublicKey(data.public);
      console.log("transaction", data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);

  function handleTo(value) {
    setTo(value);
  }
  function handleFrom(value) {
    setFrom(value);
  }
  function handleMessage(value) {
    setMessage(value);
  }
  async function handleSubmit() {
    try {
      const {
        data: { data },
      } = await postSignature({
        private_key: privateKey,
        message: { to, from, amount: message },
      });
      setSignature(data.signature);
      console.log("trans", data);
    } catch (error) {
      console.log(error.response);
    }
  }
  async function handleVerifySubmit() {
    try {
      const {
        data: { data },
      } = await verifySignature({
        public_key: publicKey,
        message: { to, from, amount: message },
        signature,
      });
      setSignature(data.signature);
      console.log("verified data", data);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      {data && (
        <TransactionForm
          privateKey={privateKey}
          handleChange={handleMessage}
          handleSubmit={handleSubmit}
          signature={signature}
          amount={message}
          handleVerifySubmit={handleVerifySubmit}
          publicKey={publicKey}
          handleTo={handleTo}
          handleFrom={handleFrom}
          to={to}
          from={from}
        />
      )}
    </div>
  );
};

export default Transaction;
