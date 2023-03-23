import React from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import { SearchBox } from "./SearchBox";
export const Carousal = (props) => {
  return (
    <div className="position-relative">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={bg1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={bg2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={bg3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="Home-search">
        <SearchBox setSearchString={props.setSearchString} />
      </div>
    </div>
  );
};
