import PopularMovies from "../components/PopularMovies";
import Trending from "../components/Trending";
import PopularReleases from "../components/PopularRelease";
import Loader from "../components/Loader";
import useMovies from "../hooks/useMovies";

export default function Home() {
  const { loading } = useMovies();
  return (
    <div className="bg-[#EBEAEA] min-h-screen px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-24">
            <div className="col-span-1 sm:col-span-1 lg:col-span-5">
              <PopularMovies />
            </div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-7">
              <Trending />
            </div>
          </div>
        )}
        {!loading && <PopularReleases />}
      </div>
    </div>
  );
}
