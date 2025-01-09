// // /src/hooks/useMovies.ts
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Movie } from "../types/type"; // Import Movie type
// import instance from "../constants/instance";

// const useMovies = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchMovies = async () => {
//     try {
//       const response=instance.get

//       setMovies(response.data.results);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch movies");
//       setLoading(false);
//     }
//   };

//   const handleSearch = async (query: string) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
//       );
//       setMovies(response.data.results);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch movies");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return { movies, loading, error, handleSearch };
// };

// export default useMovies;

import { useEffect, useState } from "react";
import { Movie, Season } from "../types/type";
import instance from "../constants/instance";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const [moviesResponse, seasonsResponse] = await Promise.all([
        instance.get('/movie/popular'),
        instance.get('/tv/popular')
      ]);
      setMovies(moviesResponse.data.results);
      setSeasons(seasonsResponse.data.results);
      setLoading(false);
    } catch {
      setError("Failed to fetch movies and TV shows");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, seasons, loading, error };
};

export default useMovies;
