import React from "react";
import i18n from "../../lib/i18n";

import { ButtonLink } from "../button-link/button-link";
import { LogoPrimeIcon } from "../../icons/logo-prime/logo-prime";
import { MagnifierIcon } from "../../icons/magnifier/magnifier";
import { AvatarIcon } from "../../icons/avatar/avatar";

import "./header.scss";

const HOME_URL = "https://www.primevideo.com/";
const STORE_URL =
  "https://www.primevideo.com/storefront/ref=atv_hm_offers_c_9zZ8D2_1_2?contentType=home&contentId=store";
const CHANNELS_URL =
  "https://www.primevideo.com/storefront/ref=atv_hm_Categories_c_9zZ8D2_1_2?contentType=home&contentId=store&filterId=OFFER_FILTER%3DSUBSCRIPTIONS";
const CATEGORIES_URL =
  "https://www.primevideo.com/categories/ref=atv_hm_offers_c_9zZ8D2_1_3";
const SEARCH_URL = "https://google.com/";

const className = "logo-icon";

export const NavigationBar = () => {
  return (
    <header className="header">
      <nav className="navigation-bar">
        <LogoPrimeIcon className={className} />
        <ul className="primary-menu">
          <li className="link-item__home">
            <a
              aria-label={i18n("meta.home.header.ariaLabel.home")}
              className="home"
              href={HOME_URL}
            >
              {i18n("meta.home.header.links.home")}
            </a>
          </li>
          <li className="link-item__store">
            <a
              aria-label={i18n("meta.home.header.ariaLabel.store")}
              className="store"
              href={STORE_URL}
            >
              {i18n("meta.home.header.links.store")}
            </a>
          </li>
          <li className="link-item__channels">
            <a
              aria-label={i18n("meta.home.header.ariaLabel.channels")}
              className="channels"
              href={CHANNELS_URL}
            >
              {i18n("meta.home.header.links.channels")}
            </a>
          </li>
          <li className="link-item__categories">
            <a
              aria-label={i18n("meta.home.header.ariaLabel.categories")}
              className="categories"
              href={CATEGORIES_URL}
            >
              {i18n("meta.home.header.links.categories")}
            </a>
          </li>
        </ul>
        <section className="secondary-menu">
          <div className="search">
            <ButtonLink to={SEARCH_URL}>
              <MagnifierIcon></MagnifierIcon>
            </ButtonLink>
          </div>
          <div className="avatar">
            <AvatarIcon></AvatarIcon>
          </div>
        </section>
      </nav>
    </header>
  );
};
