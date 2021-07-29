import React, { useState, useEffect } from "react";
import { getBlock, postBlock } from "../../api/blockchain-api";
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

  async function handleSubmit(formValues) {
    console.log("forms values", formValues);
    try {
      const {
        data: { data },
      } = await postBlock(formValues);
      console.log("returned data", data);
      setData(data);
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
