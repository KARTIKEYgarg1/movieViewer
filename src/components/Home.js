import React from "react";
import { Carousal } from "./Carousal";
import { useState } from "react";
import { CardGallery } from "./CardGallery";
import demo from "./demo.json";
export const Home = () => {
  const [searchString, setSearchString] = useState("Some of our top movies");
  return (
    <>
      <Carousal setSearchString={setSearchString} />
      <CardGallery query={searchString} def={true} data={demo} />
    </>
  );
};
