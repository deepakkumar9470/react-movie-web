import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import axios from "axios";
import Header from "../Header/Header";
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await axios.get(url);
      setMovie(res.data.results);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <Search
        query={query}
        setQuery={setQuery}
        searchMovies={searchMovies}
        isLoading={isLoading}
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-2 my-0 mx-[-15px] mt-5">
        {isLoading ? (
          <Spinner />
        ) : (
          Array.isArray(movie) &&
          movie?.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))
        )}
      </section>
    </div>
  );
};

export default Movies;
