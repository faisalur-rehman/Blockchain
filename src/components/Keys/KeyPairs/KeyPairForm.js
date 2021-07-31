import React from "react";

const KeyPairsForm = ({
  data,
  handleSubmit,
  privateKey,
  handleChange,
  publicKey,
}) => {
  console.log("private key", privateKey);
  return (
    <div>
      <section class="mt-5">
        <div class="container">
          <div class="card">
            <h4 class="card-header">Public / Private Key Pairs</h4>
            <div class="card-body">
              <form class="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
                <div class="form-group">
                  <label class="label" for="data">
                    Private Key
                  </label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="number"
                      value={privateKey}
                      onChange={({ target }) => handleChange(target.value)}
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-secondary" type="button">
                        Random
                      </button>
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Public Key</label>
                  <input
                    class="form-control"
                    value={publicKey}
                    disabled
                    readOnly
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary ladda-button"
                    id="block1chain1mineButton"
                    data-style="expand-right"
                  >
                    <span className="ladda-label">Generate</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyPairsForm;
