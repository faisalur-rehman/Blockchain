import React, { useState, useEffect } from "react";

const CoinbaseForm = ({
  data,
  peer,
  hashValues,
  handleSubmit,
  handleValueChange,
  changeColor,
}) => {
  const [prevValues, setPrevValues] = useState([]);
  useEffect(() => {
    setPrevValues([
      "0000000000000000000000000000000000000000000000000000000000000000",
      ...hashValues,
    ]);
    //eslint-disable-next-line
  }, [hashValues]);

  return (
    <div>
      <section class="coinbase-section-peer-A mt-4">
        <div class="container-fluid">
          <h2>{peer}</h2>
          <div class="scrolling-wrapper">
            <div class="container1">
              {data.length > 0 &&
                data.map((coin, index) => (
                  <>
                    <div class="row d-inline">
                      <div class="col-xs-7">
                        <div
                          className={`form form-bg-sucess ${
                            changeColor[index] ? "bg" : ""
                          }`}
                        >
                          <form
                            class="form-horizontal"
                            onSubmit={(e) => handleSubmit(e, peer, index)}
                          >
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 label">Block:</label>
                              <div class="col-sm-10">
                                <div class="input-group">
                                  <span class="input-group-addon">#</span>
                                  <input
                                    class="form-control"
                                    type="number"
                                    value={coin.block}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 label">Nonce:</label>
                              <div class="col-sm-10">
                                <input
                                  class="form-control"
                                  type="text"
                                  value={coin.nonce}
                                />
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 label">Coinbase:</label>
                              <div class="col-sm-10">
                                <div class="input-group">
                                  <div class="input-group-addon">$</div>
                                  <input
                                    class="form-control"
                                    type="text"
                                    value={coin.coinbasevalue}
                                    readOnly
                                  />
                                  <div class="input-group-addon">-&gt;</div>
                                  <input
                                    class="form-control"
                                    type="text"
                                    value={coin.coinbaseto}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-12 label-left">Tx:</label>
                              <div class="col-12">
                                {coin.txs &&
                                  coin.txs.map((tx, i) => (
                                    <div class="input-group">
                                      <div class="input-group-addon">$</div>
                                      <input
                                        class="form-control"
                                        type="text"
                                        value={tx.value}
                                        onChange={({ target }) =>
                                          handleValueChange(
                                            target.value,
                                            i,
                                            index,
                                            peer,
                                            "value"
                                          )
                                        }
                                      />
                                      <div class="input-group-addon">From:</div>
                                      <input
                                        class="form-control"
                                        type="text"
                                        value={tx.from}
                                        onChange={({ target }) =>
                                          handleValueChange(
                                            target.value,
                                            i,
                                            index,
                                            peer,
                                            "from"
                                          )
                                        }
                                      />
                                      <div class="input-group-addon">-&gt;</div>
                                      <input
                                        class="form-control"
                                        type="text"
                                        value={tx.to}
                                        onChange={({ target }) =>
                                          handleValueChange(
                                            target.value,
                                            i,
                                            index,
                                            peer,
                                            "to"
                                          )
                                        }
                                      />
                                    </div>
                                  ))}
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 label">Prev:</label>
                              <div class="col-sm-10">
                                <input
                                  class="form-control"
                                  type="text"
                                  disabled=""
                                  value={prevValues[index]}
                                />
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 label">Hash:</label>
                              <div class="col-sm-10">
                                <input
                                  class="form-control"
                                  type="text"
                                  disabled
                                  readOnly
                                  value={hashValues[index]}
                                />
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <div class="col-sm-2">
                                <i class="icon-spinner icon-spin icon-large"></i>
                              </div>
                              <div class="col-sm-10">
                                <button
                                  class="btn btn-primary ladda-button"
                                  id="block1chain1mineButton"
                                  data-style="expand-right"
                                >
                                  <span class="ladda-label">Mine</span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoinbaseForm;
