import React, { useState } from "react";

// import demo1 from "./demo1.json";

import { Link, useNavigate } from "react-router-dom";
export const SearchBox = (props) => {
  const [fetched, setfetched] = useState(false);
  const [demo1, setDemo1] = useState(false);
  let url = "https://www.omdbapi.com/?apikey=a82cd383&s=";
  // let demo2 = [];
  async function getMoviesFromApi(value) {
    try {
      if (!fetched) {
        let response = await fetch(url + value);
        let responseD = await response.json();
        setDemo1(responseD);
        // console.log(demo1);
        setfetched(true);
      }
      // return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let x = document.getElementById("search").value;
    navigate("/search/" + x);
  }
  return (
    <form
      className="search-box d-flex"
      onSubmit={handleSubmit}
      autocomplete="off"
    >
      <div className="w-100">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          autocomplete="off"
          id="search"
          required
          onChange={() => {
            // let x = document.getElementById("suggestions");
            // x.innerHTML = "";
            setfetched(false);
            getMoviesFromApi(document.getElementById("search").value);
          }}
        />
        <ul id="suggestions">
          {fetched && demo1.Response.localeCompare("False")
            ? demo1.Search.map((item, key) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/about/" + item.imdbID}
                  >
                    <li className="d-flex" key={key}>
                      <img src={item.Poster} alt="imge" />
                      <div className="p-3">
                        <span>
                          {item.Title}({item.Year})
                        </span>
                        <p>{item.Type}</p>
                      </div>
                    </li>
                  </Link>
                );
              })
            : null}
        </ul>
      </div>
      <button
        className="btn btn-success d-flex"
        style={{ height: "min-content", width: "100px" }}
        type="button"
        onClick={handleSubmit}
      >
        <span>&#128269;</span>
        <span>Search</span>
      </button>
    </form>
  );
};
