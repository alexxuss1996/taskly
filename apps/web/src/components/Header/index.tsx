import { Link } from "@tanstack/react-router";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <Link to="/" className="site-logo">
            <img src="/logo.svg" alt="TanStack" />
          </Link>
          <nav className="site-nav">
            <ul>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
