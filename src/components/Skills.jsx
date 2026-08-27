import {
  HiOutlineCog,
  HiOutlineSparkles,
  HiOutlineFlag,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
  HiOutlineViewGrid
} from "react-icons/hi";
import SectionTitle from "./common/SectionTitle";
import Reveal from "./common/Reveal";
import { skillCategories, software, languages } from "../data/portfolioData";

const icons = {
  gear: HiOutlineCog,
  leaf: HiOutlineSparkles,
  target: HiOutlineFlag,
  shield: HiOutlineShieldCheck,
  trend: HiOutlineTrendingUp,
  layers: HiOutlineViewGrid
};

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle
          title="Core Skills"
          subtitle="Core competencies built across a decade of gigawatt-scale manufacturing leadership."
        />

        <div className="skills-grid">
          {skillCategories.map((skill, index) => {
            const Icon = icons[skill.icon];

            return (
              <Reveal
                as="div"
                className="card skill-card"
                key={skill.title}
                delay={index * 0.06}
              >
                <div className="skill-number">
                  <Icon size={26} />
                </div>

                <h3>{skill.title}</h3>
              </Reveal>
            );
          })}
        </div>

        <div className="skills-extra">
          <div className="skills-extra-block">
            <h4>Software &amp; Tools</h4>

            <div className="tag-list">
              {software.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="skills-extra-block">
            <h4>Languages</h4>

            <div className="tag-list">
              {languages.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
