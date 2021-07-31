import React from "react";

const TransactionForm = ({
  privateKey,
  amount,
  to,
  from,
  handleChange,
  handleSubmit,
  handleVerifySubmit,
  signature,
  publicKey,
  handleTo,
  handleFrom,
}) => {
  return (
    <div>
      <section className="mt-5">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h4>Transaction</h4>
              <ul
                className="nav nav-tabs card-header-tabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="sign-tab"
                    data-toggle="tab"
                    href="#sign"
                    role="tab"
                    aria-controls="sign"
                    aria-selected="true"
                  >
                    Sign
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="verify-tab"
                    data-toggle="tab"
                    href="#verify"
                    role="tab"
                    aria-controls="verify"
                    aria-selected="false"
                  >
                    Verify
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body" id="card">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane active"
                  id="sign"
                  role="tabpanel"
                  aria-labelledby="sign-tab"
                >
                  <form
                    className="form-horizontal"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-group mb-3">
                      <label className="label" for="data">
                        Message
                      </label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input
                          className="form-control"
                          id="sign-amount"
                          value={amount}
                          onChange={({ target }) => handleChange(target.value)}
                        />
                        <div className="input-group-addon">From:</div>
                        <input
                          className="form-control"
                          value={from}
                          id="sign-from"
                          onChange={({ target }) => handleFrom(target.value)}
                        />
                        <div className="input-group-addon">-&gt;</div>
                        <input
                          className="form-control"
                          id="sign-to"
                          value={to}
                          onChange={({ target }) => handleTo(target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Private Key</label>
                      <input
                        className="form-control"
                        type="number"
                        value={privateKey}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <button
                        className="btn btn-block btn-primary"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Sign
                      </button>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Message Signature</label>
                      <input
                        className="form-control"
                        id="sign-signature"
                        disabled=""
                        value={signature}
                      />
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane"
                  id="verify"
                  role="tabpanel"
                  aria-labelledby="verify-tab"
                >
                  <form className="form-horizontal">
                    <div className="form-group mb-3">
                      <label className="label" for="data">
                        Message
                      </label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input
                          className="form-control"
                          id="sign-amount"
                          value={amount}
                        />
                        <div className="input-group-addon">From:</div>
                        <input
                          className="form-control"
                          value={from}
                          id="sign-from"
                        />
                        <div className="input-group-addon">-&gt;</div>
                        <input
                          className="form-control"
                          id="sign-to"
                          value={to}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="label">Message Signature</label>
                      <input
                        className="form-control"
                        id="sign-signature"
                        value={signature}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <button
                        className="btn btn-block btn-primary"
                        type="button"
                        onClick={handleVerifySubmit}
                      >
                        Verify
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransactionForm;
