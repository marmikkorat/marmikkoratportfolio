import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Grace period before actually closing, so moving the mouse from the
// thumbnail toward the centered fullscreen image (which sits elsewhere
// on screen) has time to land before the preview disappears.
const CLOSE_DELAY = 250;

/**
 * Wraps a thumbnail (achievement/certificate/project image) and, on
 * mouse hover, shows a fullscreen lightbox preview via a React portal.
 * The overlay is always present in the DOM (just visually hidden) so
 * there's no mount/unmount race — visibility is purely CSS-driven.
 *
 * Touch devices have no hover state, so tapping the thumbnail behaves
 * normally there — this is a desktop-only enhancement.
 *
 * For multi-image sets (project galleries), pass `images` (array),
 * `index` (current index) and `onIndexChange` to get prev/next controls
 * inside the fullscreen view, kept in sync with the thumbnail carousel.
 */
function HoverPreview({
  images,
  index = 0,
  onIndexChange,
  alt,
  children,
  className = ""
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const imageList = Array.isArray(images) ? images : [images];
  const hasMultiple = imageList.length > 1 && typeof onIndexChange === "function";

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  useEffect(() => () => cancelClose(), []);

  const handleTriggerEnter = () => {
    cancelClose();
    setOpen(true);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    if (!onIndexChange) return;
    onIndexChange(index === 0 ? imageList.length - 1 : index - 1);
  };

  const goNext = (e) => {
    e.stopPropagation();
    if (!onIndexChange) return;
    onIndexChange(index === imageList.length - 1 ? 0 : index + 1);
  };

  return (
    <>
      <div
        className={`hover-preview-trigger ${className}`.trim()}
        onMouseEnter={handleTriggerEnter}
        onMouseLeave={scheduleClose}
      >
        {children}
      </div>

      {createPortal(
        <div
          className={`hover-preview-overlay ${open ? "is-visible" : ""}`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <img src={imageList[index]} alt={alt} className="hover-preview-image" />

          {hasMultiple && (
            <>
              <button
                type="button"
                className="hover-preview-nav hover-preview-prev"
                onClick={goPrev}
                aria-label="Previous image"
                tabIndex={open ? 0 : -1}
              >
                <HiChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="hover-preview-nav hover-preview-next"
                onClick={goNext}
                aria-label="Next image"
                tabIndex={open ? 0 : -1}
              >
                <HiChevronRight size={28} />
              </button>

              <div className="hover-preview-counter">
                {index + 1} / {imageList.length}
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </>
  );
}

export default HoverPreview;
