import React from "react";
import "./style.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="overlap-group">
            <div className="hero-title">
              <p className="plan-and-book-your">
                Plan And Book Your Perfect Trip With Expert Advice, Travel Tips, Destination Information And Inspiration
                From Us. We Are Experienced In Bringing Adventures To Stay Their Journey, With All Outdoor Destinations
                In The World As Our Specialties. Start Your Adventure Now! Nature Has Already Called You!
              </p>
              <p className="text-wrapper">Explore the world with a smile</p>
            </div>
            <img className="png" alt="Png" src="../PngG.png" />
            <div className="frame">
              <div className="div">
                <img className="icon" alt="Icon" src="TripFrontend\carbon_location-filled.svg" />
                <div className="destination">
                  <div className="text-wrapper-2">Going to</div>
                  <div className="text-wrapper-3">Thailand</div>
                </div>
              </div>
              <div className="div">
                <div className="button-symbol-wrapper">
                  <div className="button-symbol">
                    <div className="symbol">􀉉</div>
                  </div>
                </div>
                <div className="destination">
                  <div className="text-wrapper-2">Date</div>
                  <div className="text-wrapper-3">Aug 17-sept 17</div>
                </div>
              </div>
              <div className="group-wrapper">
                <div className="group">
                  <div className="group-2">
                    <img className="img" alt="Group" src="group-4.png" />
                    <div className="text-wrapper-4">Find Trip Now</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-bar">
              <div className="tab">
                <div className="symbol-2">􀎫</div>
              </div>
              <div className="destination-2">
                <div className="text-wrapper-2">Virtual assistant</div>
                <div className="text-wrapper-3">REVA</div>
              </div>
            </div>
          </div>
          <div className="navbar">
            <div className="brand">
              <div className="logo">
                <div className="travelaja">travnt</div>
              </div>
            </div>
            <div className="frame-2">
              <div className="label-wrapper">
                <div className="label">Explore</div>
              </div>
              <div className="div-wrapper">
                <div className="label-2">Booking</div>
              </div>
              <div className="tab-2">
                <div className="label-2">News</div>
              </div>
              <div className="tab-2">
                <div className="label-2">Contact</div>
              </div>
              <div className="tab-2">
                <div className="label-2">Account</div>
              </div>
            </div>
            <div className="language">
              <img className="group-3" alt="Group" src="group-1.png" />
              <div className="text-wrapper-5">IN</div>
              <img className="group-4" alt="Group" src="group-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Desktop;