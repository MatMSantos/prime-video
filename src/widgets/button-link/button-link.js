import React, { PropTypes } from "react"

import '/widgets/button-link/button-link.scss'

export const ButtonLink = ({
  textLabel,
  to
}) => {
  return (
    <a
     href={to}
     target={'_blank'} rel="noreferrer">
     {textLabel}
   </a>
  )
}

ButtonLink.propTypes = {
  textLabel: PropTypes.string,
  to: PropTypes.string
}