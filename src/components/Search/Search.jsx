import React from "react";
import { BsSearch } from "react-icons/bs";
const Search = ({ query, setQuery, searchMovies, isLoading }) => {
  return (
    <section className="flex gap-5 items-center">
      <input
        className="searchbox block w-full p-4 border-none rounded-lg outline-none bg-none bg-[#EEE] text-[#53565A] text-xl font-normal transition  duration-300 ease-out"
        type="text"
        name="movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Serach movie...."
      />

      <button
        className="flex items-center justify-center bg-gray-600 p-3 rounded-xl"
        type="submit"
        onClick={searchMovies}
        disabled={isLoading}
      >
        <BsSearch className="w-9 h-9 cursor-pointer" />
      </button>
    </section>
  );
};

export default Search;
