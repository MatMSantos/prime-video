import "./button-link.scss";

export const ButtonLink = ({ ariaLabel, children, divId, anchorId, to }) => {
  return (
    <div className="button-link" id={divId}>
      <a id={anchorId} aria-label={ariaLabel} href={to} target={"_blank"} rel="noreferrer">
        {children}
      </a>
    </div>
  );
};