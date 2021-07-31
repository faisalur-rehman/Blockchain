import React, { useEffect, useState } from "react";
import { getBlockChain, postBlock } from "../../api/blockchain-api";
import { useCrypto } from "../../hooks/useCrypto";
import BlockChainForm from "./BlockChainForm";

const BlockChain = ({ title }) => {
  const [calcHash] = useCrypto();

  const [data, setData] = useState([]);
  const [hashValues, setHashValues] = useState([]);
  const [changeColor, setChangeColor] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

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
    let newChangeArr = changeColor;

    let newArr;
    if (value === "") {
      newArr = hashValues;
      newArr[index] = data[index].hash;
      setHashValues([...newArr]);
      setChangeColor([false, false, false, false, false]);
    } else {
      for (let i = index; i < 5; i++) {
        newChangeArr[i] = true;
      }
      setChangeColor([...newChangeArr]);
      newArr = hashValues;
      newArr[index] = calcHash(value);
      setHashValues([...newArr]);
    }
  }

  async function handleSubmit(e, block, previous, index) {
    let newArr = data;
    let newHashValues = hashValues;
    let colorArr = changeColor;
    e.preventDefault();
    try {
      const {
        data: { data },
      } = await postBlock({ block, previous });
      newArr[index] = data;
      newHashValues[index] = data.hash;
      colorArr[index] = false;
      setChangeColor([...colorArr]);
      setHashValues([...newHashValues]);
      setData([...newArr]);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      {data.length > 0 && hashValues.length > 0 && (
        <BlockChainForm
          data={data}
          hashValues={hashValues}
          handleChange={handleChange}
          changeColor={changeColor}
          handleSubmit={handleSubmit}
          title={title}
        />
      )}
    </div>
  );
};

export default BlockChain;
