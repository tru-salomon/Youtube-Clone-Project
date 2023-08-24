import ytLogo from "../../assets/logo/Youtube.256.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";

export default function NavBar({ setSearchTerm }) {
    const handleLinkClick = () => {
        setSearchTerm("");
    };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={ytLogo} className="logo" alt="YouTube logo" />
        </Link>
        <nav>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/favorites" onClick={handleLinkClick}>
            ✮ Faves
          </Link>
        </nav>
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
    </>
  );
}
