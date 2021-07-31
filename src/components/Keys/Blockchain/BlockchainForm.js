import React, { useState, useEffect } from "react";

const BlockchainForm = ({
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
  console.log("prev v", prevValues);
  return (
    <div>
      <section class="blockchain-section mt-4">
        <>
          <div class="container-fluid">
            <div class="scrolling-wrapper">
              <h2>{peer}</h2>
              <div class="container1">
                {data.map((block, index) => (
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
                                    value={block.block}
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
                                  value={block.nonce}
                                />
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 control-label">
                                Coinbase:
                              </label>
                              <div class="col-sm">
                                <div class="input-group">
                                  <div class="input-group-addon">$</div>
                                  <input
                                    class="form-control"
                                    id="block2chain1coinbasevalue"
                                    type="text"
                                    value={block.coinbasevalue}
                                    readOnly
                                    onkeyup="updateChain(2, 1, 4);"
                                  />
                                  <div class="input-group-addon">-&gt;</div>
                                  <input
                                    class="form-control"
                                    id="block2chain1coinbaseto"
                                    type="text"
                                    value={block.coinbaseto}
                                    readOnly
                                    onkeyup="updateChain(2, 1, 4);"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-sm-2 control-label">Tx:</label>
                              <div class="col-sm">
                                {block.txs &&
                                  block.txs.map((tx, i) => (
                                    <>
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
                                        <div class="input-group-addon">
                                          From:
                                        </div>
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
                                        <div class="input-group-addon">
                                          -&gt;
                                        </div>
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
                                      <div class="input-group">
                                        <div class="input-group-addon">
                                          Seq:
                                        </div>
                                        <input
                                          class="form-control col-sm-1"
                                          id="block2chain1tx1seq"
                                          type="text"
                                          value={tx.seq}
                                          onkeyup="updateChain(2, 1, 4);"
                                          readOnly
                                        />
                                        <div class="input-group-addon">
                                          Sig:
                                        </div>
                                        <input
                                          class="form-control"
                                          id="block2chain1tx1sig"
                                          type="text"
                                          value={tx.sig}
                                          readOnly
                                          onkeyup="updateChain(2, 1, 4);"
                                        />
                                      </div>
                                      <br />
                                    </>
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
                                  disabled=""
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
        </>
      </section>
    </div>
  );
};

export default BlockchainForm;
