import React from "react";

const Blockchain = () => {
  return (
    <div>
      <section class="blockchain-section mt-4">
        <h1>Blockchain</h1>
        <div class="container-fluid">
          <div class="scrolling-wrapper">
            <h2>Peer A</h2>
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
            <h2>Peer B</h2>
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
            <h2>Peer C</h2>
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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
                        <label class="col-sm-2 control-label">Coinbase:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbasevalue"
                              type="text"
                              value="100.00"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              id="block2chain1coinbaseto"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group row mb-3">
                        <label class="col-sm-2 control-label">Tx:</label>
                        <div class="col-sm">
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <br />
                          <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input
                              class="form-control"
                              type="text"
                              value="10.00"
                            />
                            <div class="input-group-addon">From:</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310"
                            />
                            <div class="input-group-addon">-&gt;</div>
                            <input
                              class="form-control"
                              type="text"
                              value="04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd"
                            />
                          </div>
                          <div class="input-group">
                            <div class="input-group-addon">Seq:</div>
                            <input
                              class="form-control col-sm-1"
                              id="block2chain1tx1seq"
                              type="text"
                              value="1"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                            <div class="input-group-addon">Sig:</div>
                            <input
                              class="form-control"
                              id="block2chain1tx1sig"
                              type="text"
                              value="30460221008aa13eb403bbaecbbefe36d3df2f3fc04fbee6c930f689eef1e54438957b476a0221008e72503ffaeb7f2d146a7f213b6974de03965c45d56b222f1b7a22640ce87cd9"
                              onkeyup="updateChain(2, 1, 4);"
                            />
                          </div>
                          <br />
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

export default Blockchain;
