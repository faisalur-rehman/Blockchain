import React from "react";

const Peer = () => {
  return (
    <div>
      <div className="row d-inline">
        <div className="col-xs-7">
          <div className="form form-bg-sucess">
            <form className="form-horizontal">
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Block:</label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">#</span>
                    <input className="form-control" type="number" value="1" />
                  </div>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Nonce:</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" value="72608" />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Data:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows="8"></textarea>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Prev:</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="text"
                    disabled=""
                    value="09876dshbn876w2tfvw76t"
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-sm-2 label">Hash:</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="text"
                    disabled=""
                    value="09876dshbn876w2tfvw76t"
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
    </div>
  );
};

export default Peer;
