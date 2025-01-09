import { Movie } from "./Movies";

export interface SearchState {
    movies: SearchMovie[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
export interface SearchMovie extends Movie {
    id: number;
    poster_path: string;
    vote_average: number;
  }