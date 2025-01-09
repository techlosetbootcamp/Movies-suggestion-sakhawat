// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header.tsx';
// import SearchBar from '../components/header/SearchBar.tsx';
import Home from '../pages/Home.tsx';
// import SearchResults from '../pages/SearchResults.tsx';
import MovieId from '../pages/MovieId.tsx';
import SearchResults from '../pages/SearchResults.tsx'

export default function AppRoutes() {
  // State to handle search logic
  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedMovie, setSelectedMovie] = useState(null);

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   setSelectedMovie(null); // Reset selected movie when a new search is performed
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<SearchResults/>}
        />
        <Route path="/movie/:id" element={<MovieId />} />
      </Routes>
    </Router>
  );
}
