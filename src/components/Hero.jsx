import { profile, stats } from "../data/portfolioData";
import Button from "./common/Button";
import StatCard from "./common/StatCard";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-blur hero-blur-left"></div>
      <div className="hero-blur hero-blur-right"></div>

      <div className="container hero-container">
        <div className="hero-left hero-enter-left">
          <div className="hero-tag">
            Manufacturing Operations Leader
          </div>

          <h1>{profile.name}</h1>

          <h2 className="hero-role">
            {profile.designation}
          </h2>

          <p className="hero-headline">
            {profile.headline}
          </p>

          <div className="hero-summary">
            {profile.summary.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <div className="hero-buttons">
            <Button
              href={profile.resume}
              target="_blank"
              variant="primary"
            >
              Download Resume
            </Button>

            <Button
              href={profile.linkedin}
              target="_blank"
              variant="outline"
            >
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="hero-right hero-enter-right">
          <div className="hero-image float">
            <img
              src={profile.image}
              alt={profile.name}
              width="441"
              height="622"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero-stats">
          {stats.map((item) => (
            <StatCard
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
