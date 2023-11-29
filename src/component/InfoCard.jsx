import React, { useState, useEffect } from "react";

const InfoCard = (props) => {
  const [state, setState] = useState({
    value: props.value,
    title: props.title,
    icon: "fas fa-calendar fa-2x text-gray-300",
    color: "primary",
    cardClass: "",
    titleClass: "",
  });

  useEffect(() => {
    setState({
      ...state,
      cardClass: `card border-left-${props.color} shadow h-100 py-2`,
      icon: `fas fa-${props.icon} fa-2x text-gray-300`,
      titleClass: `text-xs font-weight-bold text-${props.color} text-uppercase mb-1`,
    });
  }, [props.color, props.icon]);

  return (
    <div className="col-xl-3 col-md-6 mb-4 text-start">
      <div className={state.cardClass}>
        <div className="card-body">
          <div className="row no-gutters align-items-center py-1">
            <div className="col me-2">
              <div className={state.titleClass}>{props.title}</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.title === "Tasks" ? (
                  <div className="row">
                    <div className="col-auto">{state.value}</div>

                    <div
                      className="col progress progress-sm p-0 my-2"
                      style={{ height: "10px" }}
                    >
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ) : (
                  <> {state.value}</>
                )}
              </div>
            </div>
            <div className="col-auto">
              <i className={state.icon}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
