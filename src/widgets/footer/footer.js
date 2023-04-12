import React from "react";
import i18n from "../../lib/i18n";
import moment from "moment/moment";

import { LogoPrimeIcon } from "../../icons/logo-prime/logo-prime";

import "../footer/footer.scss";

const TERMS_AND_POLICIES_URL =
  "https://www.primevideo.com/help?nodeId=202064890";
const COMMENTS_URL =
  "https://www.primevideo.com/region/na/help/contact-us?ref_=atv_auth_red_aft";
const HELP_URL = "https://www.primevideo.com/help/ref=dvm_MLP_NA_help";

const year = moment().format("YYYY");

export const Footer = () => {
  return (
    <footer className="footer">
      <LogoPrimeIcon />
      <ul className="items">
        <li className="link">
          <a
            aria-label={i18n("meta.home.footer.text.terms")}
            className="terms"
            href={TERMS_AND_POLICIES_URL}
          >
            {i18n("meta.home.footer.text.terms")}
          </a>
        </li>
        <li className="link">
          <a
            aria-label={i18n("meta.home.footer.text.comments")}
            className="comments"
            href={COMMENTS_URL}
          >
            {i18n("meta.home.footer.text.comments")}
          </a>
        </li>
        <li className="link">
          <a
            aria-label={i18n("meta.home.footer.text.help")}
            className="help"
            href={HELP_URL}
          >
            {i18n("meta.home.footer.text.help")}
          </a>
        </li>
      </ul>

      <p className="text">© 1996-{year}, Amazon.com, Inc. ou suas afiliadas</p>
    </footer>
  );
};
