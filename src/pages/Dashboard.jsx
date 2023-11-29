import React, { useEffect } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import InfoCard from "../component/InfoCard";
import EarningsOverviewChart from "../component/chart/EarningChart";
import RevenueChart from "../component/chart/RevenuChart";
import ProjectCard from "../component/ProjectCard";
import ColourSystem from "../component/ColourCard";
import DevelopmentApproachCard from "../component/DevelopmentAproachCard";
import IllustrationsCard from "../component/IllustrationCard";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../component/ScrollToTop";
import Footer from "../component/Footer";

const Dashboard = () => {
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
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <SideBar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <NavBar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}

            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
          <div className="container-fluid">
            <div className="text-start mx-2 d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>
            <div className="row m-1">
              {info_card.map((card, index) => (
                <React.Fragment key={index}>
                  <InfoCard {...card} />
                </React.Fragment>
              ))}
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <EarningsOverviewChart />
              </div>

              <div className="col-xl-4 col-lg-5">
                <RevenueChart />
              </div>
            </div>

            <div className="row">
              <div className=" col-lg-6 mb-4 d-flex flex-column">
                <ProjectCard />
                <ColourSystem />
              </div>
              <div className="col-lg-6 mb-4 d-flex flex-column">
                <IllustrationsCard />
                <DevelopmentApproachCard />
              </div>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <Footer />

          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Dashboard;
