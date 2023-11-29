import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import InfoCard from "../component/InfoCard";
import CardExamples from "../component/CardExamples";

function Cards() {
  const info_card = [
    {
      title: "Earnings (Monthly)",
      icon: "calendar",
      color: "primary",
      value: "$40,000",
    },
    {
      title: "Earnings (Annual)",
      icon: "calendar",
      color: "success",
      value: "215,000",
    },
    { title: "Tasks", icon: "clipboard", color: "info", value: "50%" },
    {
      title: "Pending Requests",
      icon: "comments",
      color: "warning",
      value: "18",
    },
  ];

  return (
    <>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4 ms-1">
                <h1 className="h3 mb-0 text-gray-800">Cards</h1>
              </div>

              <div className="row my-1">
                {info_card.map((card, index) => (
                  <React.Fragment key={index}>
                    <InfoCard {...card} />
                  </React.Fragment>
                ))}
              </div>
              <CardExamples />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
