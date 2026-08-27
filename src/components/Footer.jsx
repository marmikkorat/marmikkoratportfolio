import { profile } from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();

  const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"]
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-left">
            <h3>
              Marmik<span>Korat</span>
            </h3>
            <p>Manufacturing Operations Leader</p>
          </div>

          <nav className="footer-links">
            {links.map(([name, id]) => (
              <a href={`#${id}`} key={id}>
                {name}
              </a>
            ))}
          </nav>
        </div>

        <p className="footer-copy">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
