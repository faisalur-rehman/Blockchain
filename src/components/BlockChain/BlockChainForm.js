import React, { useState, useEffect } from "react";
// import Block from "../Block/Block";

const BlockChainForm = ({
  data,
  hashValues,
  handleChange,
  changeColor,
  handleSubmit,
  title,
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
      <section className="blockchain-section mt-4">
        <div className="container-fluid">
          <h1>{title}</h1>
          <div className="scrolling-wrapper">
            <div className="container1 ">
              {data.length > 0 &&
                data.map((block, index) => (
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
                            onSubmit={(e) =>
                              handleSubmit(
                                e,
                                block.block,
                                prevValues[index],
                                index
                              )
                            }
                          >
                            <div className="form-group row mb-3">
                              <label className="col-sm-2 label">Block:</label>
                              <div className="col-sm-10">
                                <div className="input-group">
                                  <span className="input-group-addon">#</span>
                                  <input
                                    className="form-control"
                                    type="number"
                                    value={block.block}
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
                                  value={block.nonce}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-sm-2 label">Data:</label>
                              <div className="col-sm-10">
                                <textarea
                                  className="form-control"
                                  rows="8"
                                  value={block.data}
                                  onChange={({ target }) =>
                                    handleChange(target.value, index)
                                  }
                                ></textarea>
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
    </div>
  );
};

export default BlockChainForm;
