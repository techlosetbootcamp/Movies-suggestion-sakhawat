// import React from 'react';
// import AppRoutes from './routing/AppRoutes.tsx'; 

// function App() {
//   return (
//       <AppRoutes />
//   );
// }

// export default App;

import  { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store"; // Ensure this matches your setup
import { fetchMovies } from "./redux/slices/movieSlice";
import AppRoutes from "./routing/AppRoutes";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  // const { movies, loading, error } = useSelector(selectMovies);

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
