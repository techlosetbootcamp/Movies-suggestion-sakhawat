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
