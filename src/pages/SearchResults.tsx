import MoviePoster from "../components/MoviePoster";
import Loader from "../components/Loader";
import { useSearchMovies } from "../hooks/useSearchMovies";

const Search = () => {
  const { query, searches, isLoading } = useSearchMovies();

  return (
    <div className="p-4 bg-[#EBEAEA] ">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="mb-6 lg:ml-[60px] ml-[10px] mt-9">
            <h1 className="text-2xl font-bold">
              Search Results For: <span className="text-gray-500">{query}</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:ml-[60px] ml-[10px]">
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
