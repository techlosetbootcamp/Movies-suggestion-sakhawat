import MovieDetail from "../components/MovieDetails";
import Loader from "../components/Loader";
import Seasons from "../components/Season";
import useMovies from "../hooks/useMovies";

export default function Movie() {
  const { loading } = useMovies();

  return (
    <div className="bg-[#EBEAEA] min-h-screen px-4 sm:px-6 lg:px-12 flex justify-start">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-6xl w-full">
          <MovieDetail />
          <Seasons />
        </div>
      )}
    </div>
  );
}
