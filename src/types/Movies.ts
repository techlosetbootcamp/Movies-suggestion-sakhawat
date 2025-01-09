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
  release_date: string; 
  genres: { id: number; name: string }[]; 
  vote_average: number; 
  runtime: number; 
  tagline: string; 
  backdrop_path: string | null;
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
