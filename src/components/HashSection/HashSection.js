import React from "react";
import "../../Assets/css/style.css";

const HashSection = () => {
  return (
    <div>
      <section class="hash-section mt-4">
        <div class="container">
          <h1>SHA256 Hash</h1>
          <div class="form form-bg-primary">
            <form class="form-horizontal">
              <div class="form-group row">
                <label class="col-sm-2 label" for="data">
                  Data:
                </label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="data" rows="10"></textarea>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label class="col-sm-2 label" for="hash">
                  Hash:
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
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
