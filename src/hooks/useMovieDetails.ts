import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllMovies, selectIsLoading } from "../store/slices/movieSlice";
import { selectAllSearch } from "../store/slices/searchSlice";
import { Movie } from "../types/Movies";
import instance from "../constants/instance";
import { RootState } from "../store/store";

export function useMovieDetails(): { movieData: Movie | null; isLoading: boolean } {
  const { id: movieId } = useParams();
  
  const movies = useSelector((state: RootState) => selectAllMovies(state));
  const searchResults = useSelector((state: RootState) => selectAllSearch(state));
  const isLoading = useSelector((state: RootState) => selectIsLoading(state));


  const [movieData, setMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieFromState = [...movies, ...searchResults].find(
        (movie) => movie.id.toString() === movieId
      );



      if (movieFromState) {
        setMovieData(movieFromState);
      } else {
        try {
          const response = await instance.get(`/movie/${movieId}?language=en-US`);
          setMovieData(response.data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setMovieData(null);
        }
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId, movies, searchResults]);

  return { movieData, isLoading };
}
