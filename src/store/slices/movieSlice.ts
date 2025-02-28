import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../constants/instance";
import { MovieState } from "../../types/Movies";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await instance.get("trending/movie/day?language=en-US");
    return response.data.results;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching movies:", error.message);
      throw new Error(error.message);
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("Failed to fetch movies.");
    }
  }
});


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  } as MovieState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error occurred.";
      });
  },
});

export const selectAllMovies = (state: { movies: MovieState }) =>
  state.movies.movies;

export const selectIsLoading = (state: { movies: MovieState }) =>
  state.movies.status === "loading";

export const { reducer: moviesReducer } = moviesSlice;

export default moviesSlice;
