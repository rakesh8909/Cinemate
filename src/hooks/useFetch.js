import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url); //we will fetch from here
      const json = await response.json();
      setData(json.results); // we will only access results from data
    }
    fetchMovies();
  }, [url]);

  return { data };
};
