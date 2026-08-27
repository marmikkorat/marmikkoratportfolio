import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "../data/portfolioData";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    "hero",
    "about",
    "experience",
    "skills",
    "projects",
    "achievements",
    "certificates",
    "contact"
  ];

  useEffect(() => {

    const onScroll = () => {

      setScrolled(window.scrollY > 40);

      let current = "hero";

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const top = element.offsetTop - 120;

          if (window.scrollY >= top) {

            current = section;

          }

        }

      });

      setActive(current);

    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Achievements", "achievements"],
    ["Certificates", "certificates"],
    ["Contact", "contact"]
  ];

  return (

    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

      <div className="container navbar-container">

        <a
          href="#hero"
          className="logo"
        >
          Marmik<span>Korat</span>
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>

          {links.map(([name, id]) => (

            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>

          ))}

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="resume-nav"
          >
            Resume
          </a>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <HiX /> : <HiMenuAlt3 />}

        </button>

      </div>

    </header>

  );

}

export default Navbar;
