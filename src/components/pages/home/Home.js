// Context Store
import { useFilmsContext } from "../../../context/FilmsContextStore";
import Movies from "../../general-elements/movies/Movies";

// Components
import SearchWrapper from "../../general-elements/search/SearchWrapper";

const Home = () => {
  const { allFilms } = useFilmsContext();
  return (
    <main className="min-h-screen bg-slate-900">
      <SearchWrapper />
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </main>
  );
};

export default Home;
