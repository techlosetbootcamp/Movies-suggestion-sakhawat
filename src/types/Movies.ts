export interface Movie {
  id: number;
  vote_average: number;
  poster_path: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string; // Release date of the movie
  genres: { id: number; name: string }[]; // Movie genres
  vote_average: number; // IMDb rating for movie
  runtime: number; // Runtime of the movie (in minutes)
  tagline: string; // Optional tagline for the movie
  backdrop_path: string | null; // Backdrop image for the movie
  video: boolean;
  genre_ids: number[];
  vote_count: number;
}

export interface MovieState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface MoviePosterProps {
  imageUrl: string;
  movieId: number;
  rating: number;
  onClick?: () => void;
}
