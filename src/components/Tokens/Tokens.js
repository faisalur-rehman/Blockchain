import React, { useEffect, useState } from "react";
import { getTokens } from "../../api/blockchain-api";

const Tokens = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const {
        data: { data },
      } = await getTokens();
      setData(data);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  console.log("all token", data);
  return (
    <div>
      <section class="tokens-section-peer-A mt-4">
        <div class="container-fluid">
          <h1>Tokens</h1>
          <h2>Peer A</h2>
          <div class="scrolling-wrapper">
            <div class="container1">
              {data.length > 0 &&
                data.map((token) => (
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
                                    value={token.block}
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
                                  value={token.nonce}
                                />
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <label class="col-12 label-left">Tx:</label>
                              <div class="col-12">
                                {token.txs.map((tx) => (
                                  <>
                                    <div class="input-group">
                                      <div class="input-group-addon">$</div>
                                      <input
                                        class="form-control"
                                        type="text"
                                        value={tx.value}
                                      />
                                      <div class="input-group-addon">From:</div>
                                      <input
                                        class="form-control"
                                        type="text"
                                        value={tx.from}
                                      />
                                      <div class="input-group-addon">-&gt;</div>
                                      <input
                                        class="form-control"
                                        type="text"
                                        value={tx.to}
                                      />
                                    </div>
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
                                  value={token.previous}
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
                                  value={token.hash}
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
      <section class="tokens-section-peer-B mt-4">
        <div class="container-fluid">
          <h2>Peer B</h2>
          <div class="scrolling-wrapper">
            <div class="container1">
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
                              value="1"
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
                            value="72608"
                          />
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
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
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
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="2"
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
                            value="72608"
                          />
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
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
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
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="3"
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
                            value="72608"
                          />
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
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 label">Prev:</label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="text"
                            disabled=""
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="4"
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
                            value="72608"
                          />
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
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
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
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="5"
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
                            value="72608"
                          />
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
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 label">Prev:</label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="text"
                            disabled=""
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
            </div>
          </div>
        </div>
      </section>
      <section class="tokens-section-peer-C mt-4">
        <div class="container-fluid">
          <h2>Peer C</h2>
          <div class="scrolling-wrapper">
            <div class="container1">
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
                              value="1"
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
                            value="72608"
                          />
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
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
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
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="2"
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
                            value="72608"
                          />
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
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
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
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="3"
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
                            value="72608"
                          />
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
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 label">Prev:</label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="text"
                            disabled=""
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="4"
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
                            value="72608"
                          />
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
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="6.42"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Charlotte"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="Elizabeth"
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
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
                              value="5"
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
                            value="72608"
                          />
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
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 label">Prev:</label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="text"
                            disabled=""
                            value="09876dshbn876w2tfvw76t"
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
                            value="09876dshbn876w2tfvw76t"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokens;
