import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <nav className="navbar bg-light">
      <div className="container p-1">
        <Link className="navbar-brand" to="/">
          Reserve Hotel
        </Link>
        <Link type="button" className="btn btn-orange rounded-0 text-light">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;
