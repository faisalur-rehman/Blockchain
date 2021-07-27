import React from "react";
import "../../Assets/css/style.css";

const HashSection = () => {
  return (
    <div>
      <section className="hash-section mt-4">
        <div className="container">
          <h1>SHA256 Hash</h1>
          <div className="form form-bg-primary">
            <form className="form-horizontal">
              <div className="form-group row">
                <label className="col-sm-2 label" for="data">
                  Data:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="data"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row mt-2">
                <label className="col-sm-2 label" for="hash">
                  Hash:
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    type="text"
                    disabled=""
                    value="1234543vv4gh4j4hv"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HashSection;
