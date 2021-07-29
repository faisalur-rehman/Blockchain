import React, { useEffect, useState } from "react";
import "../../Assets/css/style.css";
import { useCrypto } from "../../hooks/useCrypto";

export default function BlockForm({ handleSubmit, allData }) {
  console.log("all data", allData);
  const [calcHash] = useCrypto();
  const [index, setIndex] = useState("");
  const [nonce, setNonce] = useState("");
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    setIndex(allData.block);
    setNonce(allData.nonce);
    setData(allData.data);
    setHash(allData.hash);

    //eslint-disable-next-line
  }, [allData]);

  function handleIndex({ target }) {
    setHash(calcHash(target.value));
    setIndex(target.value);
  }
  function handleNonce({ target }) {
    setHash(calcHash(target.value));
    setNonce(target.value);
  }

  function handleData({ target }) {
    setHash(calcHash(target.value));
    setData(target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit({ data });
  }
  return (
    <div>
      <section className="block-section mt-4">
        <div className="container">
          <h1>Block</h1>
          <div className="form form-bg-sucess">
            <form className="form-horizontal" onSubmit={handleFormSubmit}>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Block:</label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">#</span>
                    <input
                      className="form-control"
                      type="number"
                      value={index}
                      onChange={handleIndex}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Nonce:</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="text"
                    value={nonce}
                    onChange={handleNonce}
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Data:</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="8"
                    value={data}
                    onChange={handleData}
                  ></textarea>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Hash:</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    readOnly
                    value={hash}
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <div className="col-sm-2">
                  <i className="icon-spinner icon-spin icon-large"></i>
                </div>
                <div className="col-sm-10">
                  <button
                    className="btn btn-primary ladda-button"
                    id="block1chain1mineButton"
                    data-style="expand-right"
                  >
                    <span className="ladda-label">Mine</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
