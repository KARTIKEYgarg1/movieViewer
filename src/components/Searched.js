import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardGallery } from "./CardGallery";
// import demo1 from "./demo1.json";
import { SearchBox } from "./SearchBox";
import { Spinner } from "./Spinner";

export const Searched = () => {
  const navigate = useNavigate();
  const [st, setSt] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [fetched, setfetched] = useState(false);
  const { query } = useParams();
  const [demo1, setDemo1] = useState(false);
  const [url, setUrl] = useState(
    "https://www.omdbapi.com/?apikey=a82cd383&s=" + query + "&page=" + st
  );
  // let demo2 = [];
  // console.log(url);
  async function getMoviesFromApi(locurl) {
    try {
      if (!fetched) {
        console.log(locurl);
        let response = await fetch(locurl);
        let responseD = await response.json();
        setDemo1(responseD);
        setfetched(true);
      }
      // return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (!fetched) getMoviesFromApi(url);
  });

  return (
    <div>
      {fetched ? (
        <div>
          <div className="position-relative">
            <h2>
              <button
                className="btn"
                onClick={() => {
                  navigate(-1);
                }}
              >
                &larr;
              </button>
              Search results for {query}{" "}
            </h2>
            <button
              className="searchBarToggler btn"
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              &#128269;
            </button>
          </div>
          {showSearch ? (
            <>
              <SearchBox />
              <div className="d-flex">
                <span className="me-3 ms-3">Year:</span>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setfetched(false);
                    // console.log(document.getElementById("yearFilter").value);
                    if (document.getElementById("yearFilter").value > 0)
                      setUrl(
                        `https://www.omdbapi.com/?apikey=a82cd383&s=${query}&y=${
                          document.getElementById("yearFilter").value
                        }`
                      );
                    else
                      setUrl(
                        `https://www.omdbapi.com/?apikey=a82cd383&s=${query}&page=${st}`
                      );
                    // console.log(url);
                    getMoviesFromApi(url);
                    // document.getElementById("yearFilter").innerText = 0;
                  }}
                >
                  <input type="number" id="yearFilter" />
                </form>
              </div>
            </>
          ) : null}
          {demo1.Response.localeCompare("False") === 0 ? (
            <h4>No movie found </h4>
          ) : (
            <>
              <CardGallery
                query={demo1.totalResults + "results fetched"}
                def={true}
                data={demo1.Search}
              />
              <div className="footer">
                <span
                  onClick={() => {
                    if (st > 1) setSt(st - 1);
                  }}
                >
                  &lt;
                </span>
                <span>{st}</span>
                <span
                  onClick={() => {
                    setSt(st + 1);
                    setfetched(false);
                    setUrl(
                      "https://www.omdbapi.com/?apikey=a82cd383&s=" +
                        query +
                        "&page=" +
                        st
                    );
                    console.log(st);
                    getMoviesFromApi();
                  }}
                >
                  {st + 1}
                </span>
                <span
                  onClick={() => {
                    setSt(st + 2);
                    setfetched(false);
                    setUrl(
                      "https://www.omdbapi.com/?apikey=a82cd383&s=" +
                        query +
                        "&page=" +
                        st
                    );
                    console.log(st);
                    getMoviesFromApi();
                  }}
                >
                  {st + 2}
                </span>
                <span
                  onClick={() => {
                    if (st + 3 < demo1.totalResults) setSt(st + 3);
                  }}
                >
                  &gt;
                </span>
              </div>
            </>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
