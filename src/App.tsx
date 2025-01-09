
import  { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { AppDispatch } from "./store/store"; 
import { fetchMovies } from "./store/slices/movieSlice";
import AppRoutes from "./routing/AppRoutes";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
