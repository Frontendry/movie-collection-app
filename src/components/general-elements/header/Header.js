// Node Modules
import { Link } from "react-router-dom";

// Components
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header className="relative z-50">
      <div className="container mx-auto px-7 py-8 flex items-center">
        <h1 className="text-white font-bold text-xl sm:text-4xl">
          <Link to="/">Movie Collection</Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
