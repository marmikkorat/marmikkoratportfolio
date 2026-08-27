import Reveal from "./Reveal";

function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <Reveal className="section-title">
      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </Reveal>
  );
}

export default SectionTitle;
