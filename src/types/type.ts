
// export interface Movie {
//     id: number;
//     title: string;
//     overview: string;
//     poster_path: string | null;
//     vote_average: number; // IMDb Rating
// }

// export interface MovieDetail {
//     id: number;
//     title: string;
//     overview: string;
//     poster_path: string | null;
//     release_date: string; // Release date of the movie
//     genres: { id: number; name: string }[]; // Movie genres
//     vote_average: number; // IMDb rating for movie
//     runtime: number; // Runtime of the movie (in minutes)
//     tagline: string; // Optional tagline for the movie
//     backdrop_path: string | null; // Backdrop image for the movie
//     video: boolean;
//     genre_ids: number[];
//     vote_count: number;
// }

// export interface Genre {
//     id: number;
//     name: string;
//   }
  
//   export interface GenreState {
//     genres: Genre[];
//   }


export interface Movie {
  id: number;
  vote_average: number;
  poster_path: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export interface Season {
  id: number;
  vote_average: number;
  poster_path: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

export interface NavbarProps {
  searchPlaceholder?: string;
  showSearchButton?: boolean;
  showPlusButton?: boolean;
}

export interface MoviePosterProps {
  imageUrl: string;
  movieId: number;
  rating: number;
  onClick?: () => void;
}

export interface SeasonPosterProps {
  imageUrl: string;
  movieId?: number;
  rating: number;
  name: string;
}

export interface MovieState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SearchMovie extends Movie {
  id: number;
  poster_path: string;
  vote_average: number;
}

export interface SearchState {
  movies: SearchMovie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SeasonState {
  seasons: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
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