import React, { useState } from "react";
import "../../Assets/css/style.css";

export default function BlockForm({ handleSubmit, allData }) {
  const [index, setIndex] = useState(allData.block);
  const [nonce, setNonce] = useState(allData.nonce);
  const [data, setData] = useState(allData.txs);
  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit({ index, nonce, data });
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
                      onChange={({ target }) => setIndex(target.value)}
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
                    onChange={({ target }) => setNonce(target.value)}
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
                    onChange={({ target }) => setData(target.value)}
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
                    value={allData.hash}
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
