import React, { useState, useEffect } from "react";
import { getCoinbase, postBlock } from "../../api/blockchain-api";
import { useCrypto } from "../../hooks/useCrypto";
import CoinbaseForm from "./CoinbaseForm";

const Coinbase = () => {
  const [calcHash] = useCrypto();
  const [dataA, setDataA] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [dataC, setDataC] = useState([]);
  const [changeColorA, setchangeColorA] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [changeColorB, setchangeColorB] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [changeColorC, setchangeColorC] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hashValuesA, setHashValuesA] = useState([]);
  const [hashValuesB, setHashValuesB] = useState([]);
  const [hashValuesC, setHashValuesC] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {
        data: { data },
      } = await getCoinbase();
      data.map((item) => setHashValuesA((prev) => [...prev, item.hash]));
      data.map((item) => setHashValuesB((prev) => [...prev, item.hash]));
      data.map((item) => setHashValuesC((prev) => [...prev, item.hash]));
      setDataA(data);
      setDataB(data);
      setDataC(data);
      console.log("data", data);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  function handleValueChange(value, txIndex, blockIndex, peer, type) {
    let newData;
    let newArr;
    let newChangeArr;
    console.log("check", value, dataB[blockIndex].txs[txIndex].value);
    if (peer === "PeerA") {
      newData = [...dataA];
      newChangeArr = changeColorA;
    } else if (peer === "PeerB") {
      newData = [...dataB];
      newChangeArr = changeColorB;
    } else {
      newData = [...dataC];
      newChangeArr = changeColorC;
    }

    if (value === dataA[blockIndex].txs[txIndex].value) {
      setchangeColorA([false, false, false, false, false]);
    } else {
      for (let i = blockIndex; i < 5; i++) {
        newChangeArr[i] = true;
      }
    }
    newData[blockIndex].txs[txIndex][type] = value;
    newArr = [...hashValuesA];
    newArr[blockIndex] = calcHash(value);

    if (peer === "PeerA") {
      setHashValuesA([...newArr]);
      setDataA([...newData]);
      setchangeColorA([...newChangeArr]);
    } else if (peer === "PeerB") {
      setHashValuesB([...newArr]);
      setDataB([...newData]);
      setchangeColorB([...newChangeArr]);
    } else {
      setHashValuesC([...newArr]);
      setDataC([...newData]);
      setchangeColorC([...newChangeArr]);
    }
  }

  async function handleSubmit(e, peer, index) {
    e.preventDefault();
    let newHash;
    let newArr, changeArr;
    if (peer === "PeerA") {
      newHash = hashValuesA;
      newArr = [...dataA];
      changeArr = changeColorA;
    } else if (peer === "PeerB") {
      newHash = hashValuesB;
      newArr = [...dataB];
      changeArr = changeColorB;
    } else if (peer === "PeerC") {
      newHash = hashValuesC;
      newArr = [...dataC];
      changeArr = changeColorC;
    }
    try {
      const {
        data: { data },
      } = await postBlock(newArr[index]);
      newArr[index] = data;
      console.log("coin", data);
      newHash[index] = data.hash;
      changeArr[index] = false;
      if (peer === "PeerA") {
        setHashValuesA([...newHash]);
        setDataA([...newArr]);
        setchangeColorA([...changeArr]);
      } else if (peer === "PeerB") {
        setHashValuesB([...newHash]);
        setDataB([...newArr]);
        setchangeColorB([...changeArr]);
      } else {
        setHashValuesC([...newHash]);
        setDataC([...newArr]);
        setchangeColorC([...changeArr]);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <>
      <h1>Coinbase Transaction</h1>

      <div>
        {dataA.length > 0 && (
          <CoinbaseForm
            data={dataA}
            peer="PeerA"
            changeColor={changeColorA}
            handleValueChange={handleValueChange}
            handleSubmit={handleSubmit}
            hashValues={hashValuesA}
          />
        )}
      </div>
      <div>
        {dataB.length > 0 && (
          <CoinbaseForm
            data={dataB}
            peer="PeerB"
            changeColor={changeColorB}
            handleValueChange={handleValueChange}
            handleSubmit={handleSubmit}
            hashValues={hashValuesB}
          />
        )}
      </div>
      <div>
        {dataC.length > 0 && (
          <CoinbaseForm
            data={dataC}
            peer="PeerC"
            changeColor={changeColorC}
            handleValueChange={handleValueChange}
            handleSubmit={handleSubmit}
            hashValues={hashValuesC}
          />
        )}
      </div>
    </>
  );
};

export default Coinbase;
