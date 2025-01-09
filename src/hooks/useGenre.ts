import { useState, useEffect } from "react";
import axios from "axios";
import { Genre } from "../types/type"; // Import Genre type (Assuming you have a `Genre` type)

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGenre = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzRiMmQ5ZmMwNDkzNWQ3MzdkZTRjY2I2NWM1NWU3YiIsIm5iZiI6MTczNTAzNTY1Ny4wMDQsInN1YiI6IjY3NmE4YjA4ZjY4ZGMxMThmNzdlY2ExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a85qMlV6C5WQjBu6_iLXqrrHJon_KxBLlz7R4iOhZ3U'
          }
        }
      );
      setGenres(response.data.genres); 
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch genres");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return { genres, loading, error };
};

export default useGenre;
