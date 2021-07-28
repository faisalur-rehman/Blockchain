import React, { useEffect, useState } from "react";
import { getBlockChain } from "../../api/blockchain-api";

const BlockChain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchBlockData() {
      const {
        data: { data },
      } = await getBlockChain();
      setData(data);
    }
    fetchBlockData();
    //eslint-disable-next-line
  }, []);
  console.log("all data", data);
  return (
    <div>
      <section className="blockchain-section mt-4">
        <div className="container-fluid">
          <h1>Blockchain</h1>
          <div className="scrolling-wrapper">
            <div className="container1 ">
              {data.length > 0 &&
                data.map((block) => (
                  <>
                    <div className="row d-inline">
                      <div className="col-xs-7">
                        <div className="form form-bg-sucess">
                          <form className="form-horizontal">
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
                                  value={block.nounce}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-sm-2 label">Data:</label>
                              <div className="col-sm-10">
                                <textarea
                                  className="form-control"
                                  rows="8"
                                  value={block.txs}
                                ></textarea>
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-sm-2 label">Prev:</label>
                              <div className="col-sm-10">
                                <input
                                  className="form-control"
                                  type="text"
                                  value={block.previous}
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
                                  value={block.hash}
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

export default BlockChain;
