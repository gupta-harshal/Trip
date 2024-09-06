import React from "react";
import "./styles/dekstop2.css";
import Button from "./button";
const Dekstop2 = () => {
  return (
    <div className="features">
      <div className="card">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">3.5</div>
            </div>
          </div>
          <div className="div">Vientam</div>
          <div className="text-wrapper-2">Worefall</div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">3.5</div>
            </div>
          </div>
          <div className="div">Vientam</div>
          <div className="text-wrapper-2">Worefall</div>
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-3">
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-3">3.5</div>
            </div>
          </div>
          <div className="text-wrapper-4">Vientam</div>
          <div className="text-wrapper-5">Worefall</div>
        </div>
      </div>
      <div className="card-2">
        <div className="overlap-4">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">3.5</div>
            </div>
          </div>
          <div className="text-wrapper-4">Vientam</div>
          <div className="text-wrapper-5">Worefall</div>
        </div>
      </div>
      <div className="card-3">
        <div className="overlap-5">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">3.5</div>
            </div>
          </div>
          <div className="text-wrapper-6">Vientam</div>
          <div className="text-wrapper-7">Worefall</div>
        </div>
      </div>
      <div className="card-4">
        <div className="overlap-6">
          <div className="group">
            <div className="overlap-group-2">
              <div className="text-wrapper-3">3.5</div>
            </div>
          </div>
          <div className="text-wrapper-4">Vientam</div>
          <div className="text-wrapper-5">Worefall</div>
        </div>
      </div>
      <div className="text">
        <div className="group-wrapper">
          <div className="group-2">
            <Button place="London"/>
            <Button place="Bangkok"/>
            <Button place="England"/>
            <Button place="Singapore"/>
            <Button place="Italy"/>
          </div>
        </div>
        <p className="p">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        <div className="group-3">
          <div className="top-destination">Top Destination</div>
          <div className="text-wrapper-10">Discover your love</div>
        </div>
      </div>
    </div>
  );
};

export default Dekstop2;