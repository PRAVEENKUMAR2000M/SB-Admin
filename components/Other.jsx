import React from "react";

function Other() {
  return (
    <div>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
        <p className="mb-4">
          Bootstrap's default utility classes can be found on the official{" "}
          <a href="https://getbootstrap.com/docs" target="_blank">
            Bootstrap Documentation
          </a>{" "}
          page. The custom utilities below were created to extend this theme
          past the default utility classes built into Bootstrap's framework.
        </p>

        {/* <!-- Content Row --> */}
        <div className="row">
          <div className="col-lg-6">
            {/* <!-- Overflow Hidden --> */}
            <div className="card mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Overflow Hidden Utilty
                </h6>
              </div>
              <div className="card-body">
                Use <code>.o-hidden</code> to set the overflow property of any
                element to hidden.
              </div>
            </div>

            {/*  <!-- Progress Small --> */}
            <div className="card mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Progress Small Utility
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-1 small">Normal Progress Bar</div>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mb-1 small">Small Progress Bar</div>
                <div className="progress progress-sm mb-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                Use the <code>.progress-sm</code> className along with{" "}
                <code>.progress</code>
              </div>
            </div>

            {/* <!-- Dropdown No Arrow --> */}
            <div className="card mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Dropdown - No Arrow
                </h6>
              </div>
              <div className="card-body">
                <div className="dropdown no-arrow mb-4">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown (no arrow)
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
                Add the <code>.no-arrow</code> className alongside the{" "}
                <code>.dropdown</code>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* <!-- Roitation Utilities --> */}
            <div className="card">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Rotation Utilities
                </h6>
              </div>
              <div className="card-body text-center">
                <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                  .rotate-15
                </div>
                <hr />
                <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                  .rotate-n-15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
