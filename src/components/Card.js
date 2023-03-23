import { Link } from "react-router-dom";
import play from "../assets/play.png";
import React from "react";

export const Card = (props) => {
  return (
    <Link to={"/about/" + props.details.imdbID} className="card movie_card">
      <div className="imgBlock">
        <img src={props.details.Poster} class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <img src={play} alt="nono" className="play_button"></img>
        <h5 class="card-title">{props.details.Title}</h5>
        <div className="w-100 d-flex justify-content-between">
          <span class="movie_info fs-5">{props.details.Year}</span>
          <span class="movie_info fs-5">
            {props.details.imdbRating
              ? "★" + props.details.imdbRating
              : props.details.Type}
          </span>
        </div>
      </div>
    </Link>
  );
};
