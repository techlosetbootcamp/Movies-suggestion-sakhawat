export interface Season {
    id: number;
    vote_average: number;
    poster_path: string;
    name: string;
    original_title: string;
    backdrop_path: string;
    overview: string;
  }
  
  export interface SeasonState {
    seasons: [];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  export interface SeasonPosterProps {
    imageUrl: string;
    movieId?: number;
    rating: number;
    name: string;
  }
  