import React from "react";

const SignatureForm = ({
  privateKey,
  message,
  handleChange,
  handleSubmit,
  signature,
}) => {
  return (
    <div>
      <section class="mt-5">
        <div class="container">
          <div class="card">
            <div class="card-header">
              <h4>Signatures</h4>
              <ul
                class="nav nav-tabs card-header-tabs"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
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
                <li class="nav-item">
                  <a
                    class="nav-link "
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
            <div class="card-body" id="card">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane active"
                  id="sign"
                  role="tabpanel"
                  aria-labelledby="sign-tab"
                >
                  <form class="form-horizontal">
                    <div class="form-group mb-3">
                      <label class="label" for="data">
                        Message
                      </label>
                      <textarea
                        class="form-control"
                        rows="5"
                        value={message}
                        onChange={({ target }) => handleChange(target.value)}
                      >
                        {" "}
                      </textarea>
                    </div>
                    <div class="form-group mb-3">
                      <label class="label">Private Key</label>
                      <input
                        class="form-control"
                        type="number"
                        value={privateKey}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <button
                        class="btn btn-block btn-primary"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Sign
                      </button>
                    </div>
                    <div class="form-group mb-3">
                      <label class="label">Message Signature</label>
                      <input
                        class="form-control"
                        id="sign-signature"
                        disabled
                        readOnly
                        value={signature}
                      />
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane"
                  id="verify"
                  role="tabpanel"
                  aria-labelledby="verify-tab"
                >
                  <form class="form-horizontal">
                    <div class="form-group mb-3">
                      <label class="label">Message</label>
                      <textarea
                        class="form-control"
                        id="verify-message"
                        rows="5"
                        aria-label="Message"
                      ></textarea>
                    </div>
                    <div class="form-group mb-3">
                      <label class="label">Public Key</label>
                      <input class="form-control" id="publicKey" />
                    </div>
                    <div class="form-group mb-3">
                      <label class="label">Signature</label>
                      <input class="form-control" id="verify-signature" />
                    </div>
                    <div class="form-group mb-3">
                      <button class="btn btn-block btn-primary" type="button">
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

export default SignatureForm;
