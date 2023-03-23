import React from "react";
import { Card } from "./Card";
// import data from "./demo.json";
export const CardGallery = (props) => {
  return (
    <>
      <h3>{props.query}</h3>
      <div className="row mt-3 list">
        {props.def
          ? props.data.map((item, key) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-6 align-self-center list-item"
                  key={key}
                >
                  <div className="list-content">
                    <Card details={item} />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
