import MovieDetail from "../components/movieDetails/MovieDetails";
import Loader from "../components/loader/loader";
import Seasons from "../components/season/Season";
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
