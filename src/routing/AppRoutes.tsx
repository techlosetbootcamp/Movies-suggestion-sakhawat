import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Home from '../pages/Home.tsx';
import MovieId from '../pages/MovieDetails.tsx';
import SearchResults from '../pages/SearchResults.tsx'

export default function AppRoutes() {
 
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
