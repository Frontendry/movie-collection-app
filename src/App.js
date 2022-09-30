// React Router Modules
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./components/pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
