import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Genre {
  id: number;
  name: string;
}

interface GenreState {
  genres: Genre[];
}

const initialState: GenreState = {
  genres: [{ id: 28, name: "Action" }],
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genreSlice.actions;

export default genreSlice.reducer;

export const selectGenres = (state: { genre: GenreState }) =>
  state.genre.genres;
