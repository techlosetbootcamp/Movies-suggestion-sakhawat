// import { configureStore } from "@reduxjs/toolkit";
// import movieReducer from "./slices/movieSlice.ts";
// import genreReducer from "./slices/genreSlice.ts";

// import { useDispatch, useSelector } from "react-redux";

// const store = configureStore({
//   reducer: {
//     movies: movieReducer,
//     genre: genreRuducer ,
//    },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesSlice from "./slices/movieSlice";
import searchSlice from "./slices/searchSlice";
import seasonSlice from "./slices/seasonSlice";
const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  search: searchSlice.reducer,
  seasons: seasonSlice.reducer,
});

const Store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
