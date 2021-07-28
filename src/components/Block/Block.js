import React, { useState, useEffect } from "react";
import { getBlock } from "../../api/blockchain-api";
import BlockForm from "./BlockForm";

const Block = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getBlock();
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);

  console.log("data", data);
  async function handleSubmit({ formValues }) {
    console.log("forms values", formValues);
    try {
      //   const data = await postBlock(formValues);
      console.log("returned data", data);
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div>
      {data && <BlockForm handleSubmit={handleSubmit} allData={data} />}
    </div>
  );
};

export default Block;
