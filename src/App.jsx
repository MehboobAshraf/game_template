import { useState } from "react";
import reactLogo from "./assets/react.svg";
import user_icon from "./assets/user_icon.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img
            className="logo"
            src="https://s3-alpha-sig.figma.com/img/ae7b/b369/83f73e8c25fa294e9912227d0846b4bb?Expires=1694390400&Signature=SY9Pg8wOBFjmqLioMq1KE6RvV32qEMO2uOryVaQgYGGi5UvUziHWpWGQPzUeP2STb09KyvKsM~ujQ7ndcImIXjtP9bL33xrmoE~ET~MKFKjk3DN5ZPsjqPH-g6gsyYaTamaHV2yJBc0-tdLz9-1Fc~BwuF744h1mvKJdua~fwEeJSqJxVZqXyP7lnaU2OhazlNLUwkjzsVYprhunk~H5dvWznFDMcGq0BHR~6-6CW7nMUW1T-VWj2As9Z9qbhcUVRlCEaba-L70BNyb-6tnvABZqDCyRHGf8OmuXA75VzVljBoBZ85ozTy~kmA-Nd7N3vxPuYT5vQdYfP7R77sxy9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
          />
        </a>
        <div className="navbar-left d-flex">
          <img src={user_icon} alt="" />
          <span>USERNAME</span>
          <button className="btn">Deposit</button>
          <span>BALANCE: ZAR0.00</span>
        </div>
      </nav>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="layer">
                <img src="src/assets/slots.png" alt="" />
                <div className="heading">
                  <img src="src/assets/slotgames.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="layer">
                <img src="src/assets/slots.png" alt="" />
                <div className="heading">
                  <img src="src/assets/newgames.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="layer">
                <img src="src/assets/slots.png" alt="" />
                <div className="heading">
                  <img src="src/assets/livegamestext.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="layer">
                <img src="src/assets/slots.png" alt="" />
                <div className="heading">
                  <img src="src/assets/aviatorspribe.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark_border"></div>
      <div className="box_container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="item d-flex justify-content-center">
                <img src="src/assets/Grand.svg" alt="" />
                <div className="content">
                  <img src="src/assets/grand_jackpot_header.png" alt="" />
                  <p>3534 GVK</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-6 text-center item">
              <img src="src/assets/major_jackpot_frame.svg" alt="" />
              <div className="content">
                <img src="src/assets/major_jackpot_header.png" alt="" />
                <p>3534 GVK</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-6 text-center item">
              <img src="src/assets/minor_jackpot_frame.svg" alt="" />
              <div className="content">
                <img src="src/assets/minor_jackpot_header.png" alt="" />
                <p>3534 GVK</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center item">
              <img src="src/assets/mini_jackpot_frame.svg" alt="" />
              <div className="content">
                <img src="src/assets/mini_jackpot_header.png" alt="" />
                <p>3534 GVK</p>
              </div>
            </div>
          </div>
          <div className="container rectangle">
            <div className="row reverse">
              <div className="col-lg-7 col-md-6 col-xs-12">
                <div className="container-fluid">
                  <div className="small-box row">
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                      <img src="src/assets/goldframe_10.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-xs-12">
                <img
                  className="large-box"
                  src="src/assets/SQUAREGOLDFRAME_1.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-6 col-xs-6 mb-sm-4 mb-xs-4">
                <img className="" src="src/assets/goldframe-21.png" alt="" />
              </div>
              <div className="col-lg-7 col-md-6 col-xs-6">
                <div className="container-fluid">
                <div className="small-box row">
                  <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                    <img src="src/assets/goldframe_10.svg" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                    <img src="src/assets/goldframe_10.svg" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                    <img src="src/assets/goldframe_10.svg" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                    <img src="src/assets/goldframe_10.svg" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                    <img src="src/assets/goldframe_10.svg" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-6 col-sm-6">
                    <img src="src/assets/goldframe_10.svg" alt="" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
