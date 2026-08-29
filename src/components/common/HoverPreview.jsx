import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Grace period before actually closing, so moving the mouse from the
// thumbnail toward the centered fullscreen image (which sits elsewhere
// on screen) has time to land before the preview disappears.
const CLOSE_DELAY = 200;

// Extra vertical margin (px) added above/below the image's own bounds
// before we treat the cursor as having left it — covers the nav buttons,
// which sit vertically centered but may poke slightly past a short image.
const VERTICAL_BUFFER = 40;

/**
 * Wraps a thumbnail (achievement/certificate/project image) and, on
 * mouse hover, shows a fullscreen lightbox preview via a React portal.
 * The overlay is always present in the DOM (just visually hidden) so
 * there's no mount/unmount race — visibility is purely CSS-driven.
 *
 * Closing behaviour: moving the cursor into the blank space ABOVE or
 * BELOW the enlarged image closes the preview. Moving it to the blank
 * space to the LEFT or RIGHT does not, since that's where the prev/next
 * buttons live for multi-image galleries.
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
  const imageRef = useRef(null);

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

  // While hovering anywhere over the fullscreen overlay, only close when
  // the cursor is above or below the image's own vertical span — the
  // left/right margins stay "safe" so the nav buttons remain reachable.
  const handleOverlayMouseMove = (e) => {
    const imgEl = imageRef.current;
    if (!imgEl) {
      cancelClose();
      return;
    }

    const rect = imgEl.getBoundingClientRect();
    const withinVerticalBand =
      e.clientY >= rect.top - VERTICAL_BUFFER &&
      e.clientY <= rect.bottom + VERTICAL_BUFFER;

    if (withinVerticalBand) {
      cancelClose();
    } else {
      scheduleClose();
    }
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
          onMouseMove={handleOverlayMouseMove}
          onMouseLeave={scheduleClose}
        >
          <img
            ref={imageRef}
            src={imageList[index]}
            alt={alt}
            className="hover-preview-image"
          />

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
