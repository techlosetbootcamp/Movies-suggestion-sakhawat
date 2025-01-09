import PopularMovies from "../components/PopularMovies";
import Trending from "../components/Trending";
import PopularReleases from "../components/PopularRelease";
import Loader from "../components/Loader";
import useMovies from "../hooks/useMovies";

export default function Home() {
  const { loading } = useMovies();
  return (
    <div className="bg-[#EBEAEA] ">
      <div className="container flex flex-col lg:ml-[80px] input:ml-[20px]  ">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-12 lg:gap-24 ">
            <PopularMovies />
            <Trending />
          </div>
        )}
        {loading ? null : <PopularReleases />}
      </div>
    </div>
  );
}
