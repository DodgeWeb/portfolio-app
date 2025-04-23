import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const pathName = useLocation().pathname;

  return (
    <header className="header">
      <div className="header-content">
        <nav className="gnb">
          <ul>
            <li>
              <Link
                to="/"
                className={`nav-item ${pathName === "/" ? "active" : ""}`}
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                to="/sub"
                className={`nav-item ${pathName === "/sub" ? "active" : ""}`}
              >
                Sub Page
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`nav-item ${
                  pathName.startsWith("/portfolio") ? "active" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
