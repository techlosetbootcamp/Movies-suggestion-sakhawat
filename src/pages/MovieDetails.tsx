import MovieDetail from "../components/MovieDetails";
import Loader from "../components/Loader";
import Seasons from "../components/Season";
import useMovies from "../hooks/useMovies";

export default function Movie() {
  const {loading}=useMovies()

  return (
    <div className="bg-[#EBEAEA]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieDetail />
          <Seasons />
        </>
      )}
    </div>
  );
}
