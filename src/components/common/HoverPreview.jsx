import { useState } from "react";
import { createPortal } from "react-dom";

/**
 * Wraps a thumbnail (achievement/certificate/project image) and, on
 * mouse hover, shows a fullscreen lightbox preview of that image via
 * a React portal. Touch devices have no hover state, so tapping the
 * thumbnail behaves normally there — this is a desktop-only enhancement.
 *
 * Usage:
 * <HoverPreview src={item.image} alt={item.title}>
 *   <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
 * </HoverPreview>
 */
function HoverPreview({ src, alt, children, className = "" }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`hover-preview-trigger ${className}`.trim()}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {children}
      </div>

      {active &&
        createPortal(
          <div className="hover-preview-overlay" aria-hidden="true">
            <img src={src} alt={alt} className="hover-preview-image" />
          </div>,
          document.body
        )}
    </>
  );
}

export default HoverPreview;
