// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Interface for the genre object


// const initialState: GenreState = {
//   genres: [
//     { id: 28, name: "Action" },
//   ],
// };

// // Create the genre slice
// const genreSlice = createSlice({
//   name: "genre",
//   initialState,
//   reducers: {
//     setGenres: (state, action: PayloadAction<Genre[]>) => {
//       state.genres = action.payload; // Update the genres with the payload
//     },
//   },
// });

// // Export the action to update genres (if needed)
// export const { setGenres } = genreSlice.actions;

// // Export the genre slice reducer
// export default genreSlice.reducer;

// // Selector to get genres from state
// export const selectGenres = (state: { genre: GenreState }) => state.genre.genres;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Genre interface (for individual genre objects)
interface Genre {
  id: number;
  name: string;
}

// Define the GenreState interface (for the state structure)
interface GenreState {
  genres: Genre[];
}

// Initial state for the genre slice
const initialState: GenreState = {
  genres: [
    { id: 28, name: "Action" }, // Sample genre
  ],
};

// Create the genre slice
const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    // Action to set the genres
    setGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload; // Update the genres with the payload
    },
  },
});

// Export the action to update genres (if needed)
export const { setGenres } = genreSlice.actions;

// Export the genre slice reducer
export default genreSlice.reducer;

// Selector to get genres from state
export const selectGenres = (state: { genre: GenreState }) => state.genre.genres;
