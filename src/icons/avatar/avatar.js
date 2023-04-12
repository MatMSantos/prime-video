import React from "react";
import PropTypes from "prop-types";

export const AvatarIcon = ({ className }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="28" cy="28" r="28" fill="#182029" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28 0C12.5591 0 0 12.525 0 27.9807C0 43.4591 12.5591 56 28 56C43.4409 56 56 43.4591 56 27.9807C56 12.5261 43.4409 0 28
        0ZM28.2983 13.383C32.2387 13.383 35.398 16.5785 35.398 20.522C35.398 24.4656 32.2387 27.6217 28.2983 27.6217C24.3578 
        27.6217 21.1792 24.466 21.1792 20.522C21.1792 16.5785 24.358 13.383 28.2983 13.383ZM28.4972 29.9091C37.6649 30.0591 
        46.629 34.9389 48.2642 44.0682C43.5287 50.0443 36.2199 53.8525 28.0006 53.8525C19.7095 53.8525 12.3483 49.9747 7.61648 
        43.9093C10.0445 34.3035 19.354 29.7593 28.4972 29.9093V29.9091Z"
      fill="white"
    />
  </svg>
);
AvatarIcon.propTypes = {
  className: PropTypes.string,
};
