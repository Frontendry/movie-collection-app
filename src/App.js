// React Router Modules
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./components/pages/home/Home";
import Genre from "./components/pages/genres/Genres";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="genre/:genreName" element={<Genre />} />
    </Routes>
  );
}

export default App;
