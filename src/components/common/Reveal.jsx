import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal replacement for framer-motion's
 * initial/whileInView/viewport pattern. Uses a single shared
 * IntersectionObserver-friendly hook per instance, no animation
 * library required. Cuts the JS bundle significantly.
 *
 * Props:
 * - as: element/tag to render (default "div")
 * - delay: seconds, matches old transition delay
 * - direction: "up" | "left" | "right" (default "up")
 * - className: extra classes to merge in
 */
function Reveal({
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
