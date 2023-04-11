import React, { PropTypes } from "react"

import './button-link.scss'

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
