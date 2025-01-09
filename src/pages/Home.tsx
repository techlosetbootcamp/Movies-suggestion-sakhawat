
// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const Home = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   // Fetch popular and trending movies from the store
//   const { movies, loading, error } = useSelector((state: RootState) => state.movies);

//   // Refs for the drag-to-scroll functionality
//   const trendingMoviesRef = useRef<HTMLDivElement>(null);
//   const popularReleasesRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

//   // Function to display the star with the rating number
//   const renderStarsWithRating = (rating: number) => (
//     <div className="flex items-center space-x-1">
//       <span className="text-yellow-500">★</span>
//       <span className="text-white">{rating.toFixed(1)}</span>
//     </div>
//   );

//   // Handle drag-to-scroll
//   const handleMouseDown = (
//     e: React.MouseEvent,
//     containerRef: React.RefObject<HTMLDivElement>
//   ) => {
//     const startX = e.clientX;
//     const scrollLeft = containerRef.current?.scrollLeft || 0;
//     let isDragging = true;

//     const onMouseMove = (e: MouseEvent) => {
//       if (!isDragging) return;
//       const x = e.clientX;
//       const walk = (x - startX) * 3;
//       if (containerRef.current) {
//         containerRef.current.scrollLeft = scrollLeft - walk;
//       }
//     };

//     const onMouseUp = () => {
//       isDragging = false;
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };


//   return (
//     <>
//       <div>
//         {/* Popular Movies Section */}
//         <div
//           className="w-[140px] h-[23px] mt-9 md:ml-[83px] ml-[20px]"
//           style={{
//             fontFamily: 'Roboto',
//             fontSize: '20px',
//             fontWeight: '500',
//             lineHeight: '23.44px',
//             textAlign: 'left',
//           }}
//         >
//           <span>Popular Movies</span>
//         </div>

//         {/* Display Popular Movies */}
//         <div className="flex md:gap-4 gap-2 mt-5 md:ml-[83px] ml-[20px] mr-[20px]">
//           {loadingPopular ? (
//             <p>Loading movies...</p>
//           ) : popularMovies.length > 0 ? (
//             popularMovies.slice(0, 2).map((movie: any) => (
//               <div
//                 key={movie.id}
//                 className="movie-item relative object-fill"
//                 onClick={() => navigate(`/movie/${movie.id}`)}
//               >
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   className="md:w-[177px] w-[138px] md:h-[263px] object-cover rounded-md"
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No popular movies found.</p>
//           )}
//         </div>

//         {/* Trending Movies Section */}
//         <div className="mb-3 md:w-[60%] md:mt-[-320px] mt-[20px] justify-start md:ml-[540px]" style={{ height: 'calc(100vh - 50px)' }}>
//           <div
//             className="md:w-[211px] md:h-[23px] opacity-100 md:mt-4 md:ml-[20px] ml-[20px]"
//             style={{
//               fontFamily: 'Roboto',
//               fontSize: '20px',
//               fontWeight: '500',
//               lineHeight: '23.44px',
//               textAlign: 'left',
//             }}
//           >
//             <span>Trending</span>
//           </div>

//           {/* Display Trending Movies */}
//           <div
//             className="mt-5 overflow-x-hidden gap-4 sm:flex-warp sm:grid-cols-2 cursor-grab ml-[20px] md:mr-10"
//             ref={trendingMoviesRef}
//             onMouseDown={(e) => handleMouseDown(e, trendingMoviesRef)}
//           >
//             {loading ? (
//               <p>Loading movies...</p>
//             ) : trendingMovie.length > 0 ? (
//               <div className="flex flex-wrap md:min-w-max">
//                 {trendingMovies.slice(2, 8).map((movie: any) => (
//                   <div
//                     key={movie.id}
//                     className="movie-item relative flex-shrink-0 md:w-[177px] mr-4 w-[138px] mb-4 md:h-[263px]"
//                     onClick={() => navigate(`/movie/${movie.id}`)}
//                   >
//                     {/* Movie Rating at the top */}
//                     <div className="absolute top-2 left-2 text-white font-bold">
//                       {renderStarsWithRating(movie.vote_average)}
//                     </div>
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                       alt={movie.title}
//                       className="w-[177px] h-[263px] object-cover rounded-md"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No trending movies found.</p>
//             )}
//           </div>
//         </div>

//         {/* Popular Releases Section */}
//         <div className="md:mt-[-180px] md:ml-[80px] ml-[20px] mt-[120px]">
//           <p
//             className="w-[211px] h-[23px] opacity-100 mt-0"
//             style={{
//               fontFamily: 'Roboto',
//               fontSize: '20px',
//               fontWeight: '500',
//               lineHeight: '23.44px',
//               textAlign: 'left',
//             }}
//           >
//             Popular Releases
//           </p>

//           {/* Display Popular Releases */}
//           <div
//             className="sm-w[80px] mt-5 overflow-x-hidden cursor-grab md:mr-10"
//             ref={popularReleasesRef}
//             onMouseDown={(e) => handleMouseDown(e, popularReleasesRef)} // Handle drag to scroll
//           >
//             {loadingTrending ? (
//               <p>Loading movies...</p>
//             ) : trendingMovies.length > 0 ? (
//               <div className="flex flex-wrap md:flex-nowrap gap-4 sm:w-[80px]">
//                 {trendingMovies.slice(0, 20).map((movie: any) => (
//                   <div
//                     key={movie.id}
//                     className="md:w-[177px] md:h-[263px] mb-5 movie-item relative md:flex-shrink-0"
//                     onClick={() => navigate(`/movie/${movie.id}`)}
//                   >
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                       alt={movie.title}
//                       className="md:w-[177px] w-[138px] h-[263px] object-cover rounded-md"
//                     />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No trending movies found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import PopularMovies from "../components/popularMovies/PopularMovies";
import Trending from "../components/trending/Trending"; 
import PopularReleases from "../components/popularRelease/PopularRelease";
import Loader from "../components/loader/loader";
import useMovies from "../hooks/useMovies";

export default function Home() {
const {loading}=useMovies()
  return (
    <div className="bg-[#EBEAEA] ">
      <div className="container flex flex-col lg:ml-[80px] input:ml-[20px] ">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-12 lg:gap-24">
            <PopularMovies />
            <Trending />
          </div>
        )}
        {loading ? null : <PopularReleases />}
      </div>
    </div>
  );
}