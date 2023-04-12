import "./button.scss";

export const Button = ({
  ariaLabel,
  children,
  expanded,
  hasPopUp,
  onClick,
}) => {
  return (
    <button
      className="button"
      aria-label={ariaLabel}
      aria-expanded={expanded}
      aria-haspopup={hasPopUp}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
