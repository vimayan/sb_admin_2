import React from "react";

const CardExamples = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        {/* Default Card Example */}
        <div className="card mb-4">
          <div className="card-header">Default Card Example</div>
          <div className="card-body">
            This card uses Bootstrap's default styling with no utility classes
            added. Global styles are the only things modifying the look and feel
            of this default card example.
          </div>
        </div>

        {/* Basic Card Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Basic Card Example
            </h6>
          </div>
          <div className="card-body">
            The styling for this basic card example is created by using default
            Bootstrap utility classes. By using utility classes, the style of
            the card component can be easily modified with no need for any
            custom CSS!
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        {/* Dropdown Card Example */}
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Dropdown Card Example
            </h6>
            <div className="dropdown no-arrow">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          {/* Card Body */}
          <div className="card-body">
            Dropdown menus can be placed in the card header in order to extend
            the functionality of a basic card. In this dropdown card example,
            the Font Awesome vertical ellipsis icon in the card header can be
            clicked on to toggle a dropdown menu.
          </div>
        </div>

        {/* Collapsable Card Example */}
        <div className="card shadow mb-4">
          {/* Card Header - Accordion */}
          <a
            href="#collapseCardExample"
            className="d-block card-header py-3 text-decoration-none"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="true"
            aria-controls="collapseCardExample"
          >
            <h6 className="m-0 font-weight-bold text-primary">
              Collapsable Card Example
            </h6>
          </a>
          {/* Card Content - Collapse */}
          <div className="collapse show" id="collapseCardExample">
            <div className="card-body">
              This is a collapsable card example using Bootstrap's built-in
              collapse functionality. <strong>Click on the card header</strong>{" "}
              to see the card body collapse and expand!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExamples;
