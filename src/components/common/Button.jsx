function Button({
  children,
  href,
  target = "_self",
  variant = "primary",
  onClick,
}) {
  const className = `btn ${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={target === "_blank" ? "noreferrer" : ""}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
