import "./button-link.scss";

export const ButtonLink = ({ ariaLabel, children, to }) => {
  return (
    <div className="button-link">
      <a aria-label={ariaLabel} href={to} target={"_blank"} rel="noreferrer">
        {children}
      </a>
    </div>
  );
};
