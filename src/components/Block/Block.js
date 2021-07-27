import React from "react";
import "../../Assets/css/style.css";

const Block = () => {
  return (
    <div>
      <section class="block-section mt-4">
        <div class="container">
          <h1>Block</h1>
          <div class="form form-bg-sucess">
            <form class="form-horizontal">
              <div class="form-group row mb-3">
                <label class="col-sm-2 label">Block:</label>
                <div class="col-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon">#</span>
                    <input class="form-control" type="number" value="1" />
                  </div>
                </div>
              </div>
              <div class="form-group row mb-3">
                <label class="col-sm-2 label">Nonce:</label>
                <div class="col-sm-10">
                  <input class="form-control" type="text" value="72608" />
                </div>
              </div>
              <div class="form-group row mb-3">
                <label class="col-sm-2 label">Data:</label>
                <div class="col-sm-10">
                  <textarea class="form-control" rows="8"></textarea>
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
      </section>
    </div>
  );
};

export default Block;
