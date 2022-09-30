// React Router Modules
import { useParams } from "react-router-dom";

// Context Store
import { useFilmsContext } from "../../../context/FilmsContextStore";

// Components
import Header from "../../general-elements/header/Header";
import MovieFull from "../../general-elements/movies/MovieFull";

const Movie = () => {
  // Get Param Name
  const { imdbId } = useParams();

  // All Films
  const { allFilms } = useFilmsContext();

  // Filter Selected Movie
  const movieSelected =
    allFilms && allFilms.find((film) => film.imdbID === imdbId);

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      {movieSelected && <MovieFull movieData={movieSelected} />}
    </main>
  );
};

export default Movie;
