import { useState } from "react";
import NavBar from "../components/NavBar";
// import MovieService from "../services/MovieService";
import { movies } from "../mocks/movies";
import MovieCard from "../components/MovieCard";

export default function MainPage() {
  const moviesData = movies.Search;

  const [search, setSearch] = useState("");
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   MovieService.getMoviesByName(search, 1)
  //     .then((movies) => {
  //       setMovies(movies.Search);
  //     })
  //     .catch((err) => console.log(err));
  // }, [search]);

  return (
    <div>
      <NavBar searchValue={search} setSearchValue={setSearch} />
      <div className="flex flex-row">
        <div className="w-full flex flex-col">
          <h1 className="mt-8 mb-6 ml-12 text-bold text-2xl text-white">
            Movies
          </h1>
          {movies && (
            <div className="grid lg:grid-cols-5 sm:grid-cols-3">
              {moviesData.map((movie) => (
                <div key={movie.Title} className="my-4 mx-4">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
