import React from "react";

const CoinbaseForm = ({ data }) => {
  return (
    <div>
      <h1>Coinbase Transaction</h1>
      {["Peer A", "Peer B", "Peer C"].map((peer) => (
        <section class="coinbase-section-peer-A mt-4">
          <div class="container-fluid">
            <h2>{peer}</h2>
            <div class="scrolling-wrapper">
              <div class="container1">
                {data.length > 0 &&
                  data.map((coin) => (
                    <>
                      <div class="row d-inline">
                        <div class="col-xs-7">
                          <div class="form form-bg-sucess">
                            <form class="form-horizontal">
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
                                    />
                                    <div class="input-group-addon">-&gt;</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value={coin.coinbaseto}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label class="col-12 label-left">Tx:</label>
                                <div class="col-12">
                                  <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="25.00"
                                    />
                                    <div class="input-group-addon">From:</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Darcy"
                                    />
                                    <div class="input-group-addon">-&gt;</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Bingley"
                                    />
                                  </div>
                                  <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="4.27"
                                    />
                                    <div class="input-group-addon">From:</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Elizabeth"
                                    />
                                    <div class="input-group-addon">-&gt;</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Jane"
                                    />
                                  </div>
                                  <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="19.22"
                                    />
                                    <div class="input-group-addon">From:</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Wickham"
                                    />
                                    <div class="input-group-addon">-&gt;</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Lydia"
                                    />
                                  </div>
                                  <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="106.44"
                                    />
                                    <div class="input-group-addon">From:</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Lady Catherine de Bourgh"
                                    />
                                    <div class="input-group-addon">-&gt;</div>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Collins"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label class="col-sm-2 label">Prev:</label>
                                <div class="col-sm-10">
                                  <input
                                    class="form-control"
                                    type="text"
                                    disabled=""
                                    value={coin.previous}
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
                                    value={coin.hash}
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
      ))}
    </div>
  );
};

export default CoinbaseForm;
