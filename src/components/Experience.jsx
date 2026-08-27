import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import Reveal from "./common/Reveal";
import { experience, education } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionTitle
          title="Experience"
          subtitle="A decade-long journey from the shop floor to gigawatt-scale manufacturing leadership."
        />

        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal
              as="div"
              className="timeline-item"
              key={`${job.company}-${job.role}`}
              delay={index * 0.05}
            >
              <Card>
                <div className="job-header">
                  <div>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>

                  <span>{job.period}</span>
                </div>

                <ul>
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="education-block">
          <h3 className="education-title">Education</h3>

          <div className="education-grid">
            {education.map((item) => (
              <Card className="education-card" key={item.degree}>
                <h4>{item.degree}</h4>
                <p>{item.institute}</p>
                <span>{item.period}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
