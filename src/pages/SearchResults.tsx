// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function SearchBar() {
//   const [searchQuery, setSearchQuery] = useState(''); // State to track search input value
//   const [searchResults, setSearchResults] = useState<any[]>([]); // State to store search results
//   const navigate = useNavigate(); // For navigation

//   // Handle search input change
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = async (event: React.FormEvent) => {
//     event.preventDefault(); // Prevent default form behavior
//     if (searchQuery.trim()) {
//       try {
//         // Fetch movies from TMDB API
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/search/movie`,
//           {
//             params: {
//               api_key: 'd74b2d9fc04935d737de4ccb65c55e7b', // Replace with your API key
//               query: searchQuery,
//             },
//           }
//         );

//         // Update search results state
//         setSearchResults(response.data.results);
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     } else {
//       console.log('Please enter a search query.');
//     }
//   };

//   // Handle movie click to navigate to the movie detail page
//   const handleMovieClick = (movieId: number) => {
//     // Reset search input and results
//     setSearchQuery('');
//     setSearchResults([]);

//     // Navigate to movie details page
//     navigate(`/movie/${movieId}`);
//   };

//   // Render star rating based on the movie rating
//   const renderStarsWithRating = (rating: number) => {
//     const stars = Math.round(rating / 2); // Convert rating (0-10) to stars (0-5)
//     return '⭐'.repeat(stars); // Display stars as a string
//   };

//   return (
//     <div>
//       {/* Search Input */}
//       <form onSubmit={handleSearchSubmit} className="relative">
//         <input
//           type="text"
//           placeholder="🔍 Search a movie or a series"
//           value={searchQuery} // Bind input value to state
//           onChange={handleInputChange} // Update state on input change
//           className="w-full md:w-[630px] h-[57px] rounded-[30px] pl-5 text-lg border border-gray-300 text-center bg-gray-300"
//         />
//       </form>

//       {/* Conditional Content Rendering */}
//       {searchResults.length > 0 ? (
//         <>
//           {/* Showing results for */}
//           <div className="w-[238px] h-[15px] mt-[50px] ml-[80px] font-bold text-black">
//             Showing results for: <span className="text-gray-400">{searchQuery}</span>
//           </div>

//           {/* Search Results */}
//           <div className="mt-5 ml-[45px] mr-[35px] grid md:grid-cols-7 px-5">
//             {searchResults.map((movie: any) => (
//               <div
//                 key={movie.id}
//                 className="relative flex flex-col items-center p-4 rounded-md text-white cursor-pointer"
//                 onClick={() => handleMovieClick(movie.id)} // Add click event to navigate
//                 style={{
//                   width: '177px',
//                   height: '263px',
//                 }}
//               >
//                 {/* Star rating over the movie poster */}
//                 <div className="absolute top-2 left-2 text-white font-bold">
//                   {renderStarsWithRating(movie.vote_average)} {/* Render star rating */}
//                 </div>

//                 {/* Movie Poster */}
//                 <img
//                   src={
//                     movie.poster_path
//                       ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                       : '/path/to/fallback-image.jpg' // Fallback for missing poster
//                   }
//                   alt={movie.title || 'Movie poster'}
//                   className="w-[177px] h-[263px] object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         searchQuery && (
//           <div className="mt-5 text-center text-white">No search results yet.</div>
//         )
//       )}
//     </div>
//   );
// }

import MoviePoster from "../components/moviePoster/MoviePoster";
import Loader from "../components/loader/loader";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query, searches, isLoading } = useSearchMovies();

  
  const params = useParams()

  return (
    <div className="p-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">
              Search Results For: <span className="text-blue-500">{query}</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {searches.length > 0 ? (
              searches.map((search) => (
                <div key={search.id} className="relative">
                  <MoviePoster
                    imageUrl={search.poster_path}
                    movieId={search.id}
                    rating={search.vote_average}
                  />
                </div>
              ))
            ) : query ? (
              <div className="col-span-full text-center text-gray-500">
                No movies found for "{query}".
              </div>
            ) : (
              <div className="col-span-full text-center text-gray-500">
                Enter a search query.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;