import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import demo2 from "./demo2.json";
import { SearchBox } from "./SearchBox";
import { Spinner } from "./Spinner";
export const AboutMovie = (props) => {
  const { id } = useParams();
  const [fetched, setfetched] = useState(false);
  const [demo2, setDemo2] = useState(false);
  let url = "https://www.omdbapi.com/?apikey=a82cd383&i=" + id;
  // let demo2 = [];
  async function getMoviesFromApi() {
    try {
      if (!fetched) {
        let response = await fetch(url);
        let responseD = await response.json();
        setDemo2(responseD);
        console.log(demo2);
        setfetched(true);
      }
      // return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMoviesFromApi();
  });

  return (
    <div>
      {fetched ? (
        <div>
          <div className="d-flex justify-content-between ps-2">
            <Link to="/" className="text-decoration-none mt-3 ms-3">
              <h2>&#8962;</h2>
            </Link>
            <SearchBox />
          </div>
          <div className="row">
            <img src={demo2.Poster} alt="na" className="col-4"></img>
            <div className="col">
              <h3>{demo2.Title}</h3>
              <span>{demo2.Released}</span>
              <span>{demo2.Genre}</span>
              <p>{demo2.Plot}</p>
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td>Language</td>
                    <td>{demo2.Language}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>{demo2.Runtime}</td>
                  </tr>
                  <tr>
                    <td>imdb Rating</td>
                    <td>{demo2.imdbRating}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{demo2.Type}</td>
                  </tr>
                  <tr>
                    <td>BoxOffice</td>
                    <td>{demo2.BoxOffice}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                Directors-
                <p>{demo2.Director}</p>
              </div>
              <div>
                Actors-
                <p>{demo2.Actors}</p>
              </div>
              <div>
                Writer-
                <p>{demo2.Writer}</p>
              </div>
              <div className="row">
                {demo2.Ratings.map((item, key) => {
                  return (
                    <div key={key} className="text-center col">
                      <span className="rating">{item.Value}</span>
                      <br />
                      {item.Source}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
