import "./button.scss";

export const Button = ({
  ariaLabel,
  ariaExpanded,
  ariaHasPopUp,
  children,
  onClick,
}) => {
  return (
    <button
      className="button"
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopUp}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
