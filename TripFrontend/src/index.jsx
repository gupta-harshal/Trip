import React from "react";
import Navitem from "./navItem";
import Dest from "./destination";
import "./styles/style.css";
import SearchButton from "./searchButton";
import Header from "./header";
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
              <Dest 
                icon="location.png"
                activity="Going to"
                main="Thailand"
                
                >
              
              </Dest>
              
              <Dest 
                icon="calendar.png"
                activity="Date"
                main="Aug 17- Sept 17"
              />
              <SearchButton
              name="Find Trip"/>

            </div>

          </div>
          <div className="navbar">
            <div className="brand">
              <div className="logo">
                <div className="travelaja">travnt</div>
              </div>
            </div>
            <Header/>
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