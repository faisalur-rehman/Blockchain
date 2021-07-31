import React, { useState, useEffect } from "react";

const TokensForm = ({
  data,
  peer,
  hashValues,
  handleSubmit,
  handleValueChange,
  handleFromChange,
  handleToChange,
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
      <>
        <section className="tokens-section-peer-A mt-4">
          <div className="container-fluid">
            <h2>{peer}</h2>
            <div className="scrolling-wrapper">
              <div className="container1">
                {data.length > 0 &&
                  data.map((token, index) => (
                    <>
                      <div className="row d-inline">
                        <div className="col-xs-7">
                          <div
                            className={`form form-bg-sucess ${
                              changeColor[index] ? "bg" : ""
                            }`}
                          >
                            <form
                              className="form-horizontal"
                              onSubmit={(e) => handleSubmit(e, peer, index)}
                            >
                              <div className="form-group row mb-3">
                                <label className="col-sm-2 label">Block:</label>
                                <div className="col-sm-10">
                                  <div className="input-group">
                                    <span className="input-group-addon">#</span>
                                    <input
                                      className="form-control"
                                      type="number"
                                      value={token.block}
                                      readOnly
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
                                    value={token.nonce}
                                    readOnly
                                  />
                                </div>
                              </div>
                              <div className="form-group row mb-3">
                                <label className="col-12 label-left">Tx:</label>
                                <div className="col-12">
                                  {token.txs.map((tx, i) => (
                                    <>
                                      <div className="input-group">
                                        <div className="input-group-addon">
                                          $
                                        </div>
                                        <input
                                          className="form-control"
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
                                        <div className="input-group-addon">
                                          From:
                                        </div>
                                        <input
                                          className="form-control"
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
                                        <div className="input-group-addon">
                                          -&gt;
                                        </div>
                                        <input
                                          className="form-control"
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
                                    </>
                                  ))}
                                </div>
                              </div>
                              <div className="form-group row mb-3">
                                <label className="col-sm-2 label">Prev:</label>
                                <div className="col-sm-10">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={prevValues[index]}
                                  />
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
                                    value={hashValues[index]}
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
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default TokensForm;
