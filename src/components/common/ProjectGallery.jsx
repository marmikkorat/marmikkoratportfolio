import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0);

  const hasMultiple = images.length > 1;

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery">
      <img
        src={images[index]}
        alt={`${title} — screenshot ${index + 1}`}
        loading="lazy"
        decoding="async"
      />

      {hasMultiple && (
        <>
          <button
            className="gallery-nav gallery-prev"
            onClick={goPrev}
            aria-label="Previous screenshot"
          >
            <HiChevronLeft size={22} />
          </button>

          <button
            className="gallery-nav gallery-next"
            onClick={goNext}
            aria-label="Next screenshot"
          >
            <HiChevronRight size={22} />
          </button>

          <div className="gallery-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectGallery;
