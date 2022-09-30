// Context Store
import { useFilmsContext } from "../../../context/FilmsContextStore";

// Components
import Movies from "../../general-elements/movies/Movies";
import Header from "../../general-elements/header/Header";
import SearchWrapper from "../../general-elements/search/SearchWrapper";

const Home = () => {
  const { allFilms } = useFilmsContext();

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <SearchWrapper />
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </main>
  );
};

export default Home;
