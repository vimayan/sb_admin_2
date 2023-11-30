import React from "react";

const ProjectCard = () => {
  return (
    <>
      {/* Project Card Example */}
      <div className="card shadow mb-4 text-start">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          <h4 className="small font-weight-bold">
            Server Migration <span className="float-end">20%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "20%" }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Sales Tracking <span className="float-end">40%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Customer Database <span className="float-end">60%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Payout Details <span className="float-end">80%</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h4 className="small font-weight-bold">
            Account Setup <span className="float-end">Complete!</span>
          </h4>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
