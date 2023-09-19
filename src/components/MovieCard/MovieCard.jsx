import React from "react";
const MovieCard = ({ movie }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "https://image.tmdb.org/t/p/w500//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg";
  return (
    <div className="d-flex  flex-col min-w-[250px] p-[15px] cursor-pointer shadow-xl shadow-gray-800">
      <img
        className="block w-full object-cover rounded-md"
        src={imgUrl}
        alt="movie"
      />

      <div className="flex justify-center flex-col">
        <h2 className="text-3xl font-extrabold text-gray-200 py-5  mb-2">
          {movie.title}{" "}
        </h2>
        <p className="text-sm font-semibold text-gray-200 leading-5 mb-2 uppercase">
          Release date: {movie.release_date}
        </p>
        <span className="text-sm font-semibold text-gray-200 leading-5 mb-2 uppercase">
          Rating: {movie.vote_average}
        </span>
        <p className="w-[90%] text-base font-[500] leading-3 opacity-70">
          {movie.overview.substring(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
