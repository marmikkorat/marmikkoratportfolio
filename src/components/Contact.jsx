import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import Card from "./common/Card";
import Button from "./common/Button";
import Reveal from "./common/Reveal";
import { profile } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <Card className="contact-card">
            <h2>Let's Connect</h2>

            <p>
              Open to conversations on manufacturing leadership, operational
              excellence and gigawatt-scale solar manufacturing opportunities.
              Feel free to reach out.
            </p>

            <div className="contact-buttons">
              <Button href={`mailto:${profile.email}`} variant="primary">
                <HiOutlineMail size={20} />
                Email Me
              </Button>

              <Button href={`tel:${profile.phone}`} variant="outline">
                <HiOutlinePhone size={20} />
                Call
              </Button>

              <Button
                href={profile.linkedin}
                target="_blank"
                variant="outline"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
