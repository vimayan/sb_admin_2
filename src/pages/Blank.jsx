import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
function Blank() {
  return (
    <>
      {" "}
      <div id="wrapper">
        <SideBar />{" "}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blank;
