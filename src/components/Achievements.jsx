import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import Reveal from "./common/Reveal";
import HoverPreview from "./common/HoverPreview";
import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <SectionTitle
          title="Achievements"
          subtitle="Recognition earned through consistent operational excellence and continuous improvement."
        />

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="achievement-card">
                <div className="achievement-image">
                  <HoverPreview src={item.image} alt={item.title}>
                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  </HoverPreview>
                </div>

                <div className="achievement-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
