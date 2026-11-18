import { ArrowUp, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";
export function Layout() {
  const [theme, setTheme] = useState<"dark" | "light">(
    () => (localStorage.getItem("theme") as "dark" | "light") || "dark",
  );
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);
  const links = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Skills", "/#skills"],
    ["Experience", "/#experience"],
    ["Projects", "/projects"],
    ["Contact", "/#contact"],
  ];
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand">
            <span className="brand-mark">
              HM<span className="accent">.</span>
            </span>
            <span>Hetal</span>
          </Link>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {links.map(([label, to]) => (
              <NavLink
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => {
                  if (to === "/projects") {
                    return isActive ? "active" : "";
                  }

                  const [pathname, hash] = to.split("#");
                  const targetHash = hash ? `#${hash}` : "";
                  return location.pathname === pathname &&
                    location.hash === targetHash
                    ? "active"
                    : "";
                }}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              className="button button-small nav-resume"
              href="/Hetal-Mistry-Resume.pdf"
              download
            >
              Resume <ArrowUp size={14} />
            </a>
            <button
              className="icon-btn mobile-menu"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">
              HM<span className="accent">.</span>
            </span>
            <span>Hetal</span>
          </Link>
          <p>Designed & built with care by Hetal Mistry.</p>
          <div className="socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
          <span className="copyright">
            © {new Date().getFullYear()} Hetal Mistry
          </span>
        </div>
      </footer>
      <button
        className="back-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
