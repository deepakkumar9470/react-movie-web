import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const MovieDeatils = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "https://image.tmdb.org/t/p/w500//dzUFB4gIGsGvxuSHhNPyPk0JmAC.jpg";
  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const res = await axios(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleMovie();
  }, [id]);

  console.log(movie);
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-10 justify-around">
      <div className="flex-1">
        <h1 className="text-xl py-4 font-extrabold">Movie : {movie.title}</h1>
        <img
          className="w-[400px] h-[450px] object-contain rounded-lg shadow-md"
          src={imgUrl}
          alt="singlemovie"
        />
      </div>

      <div className="flex-1 mt-5">
        <h2 className="text-4xl text-gray-600 font-extrabold py-4 cursor-pointer">
          {movie.title}
        </h2>
        <span className="text-base text-gray-200 font-bold mb-2">
          Rating : {movie.popularity}
        </span>
        <p className="text-base text-gray-200 font-bold mb-2 ">
          Overview : {movie.overview}
        </p>
        <p className="text-sm text-gray-200 mb-2 ">
          Release Date : {movie.release_date}
        </p>
        <Link className="cursor-pointer text-base" to="/">
          <BsArrowLeft className="w-5 h-5 bg-gray-950 text-white rounded-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default MovieDeatils;
