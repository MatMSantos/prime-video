import React from "react";
import i18n from "../../lib/i18n";

import { ButtonLink } from "../button-link/button-link";
import { Button } from "../button/button";
import { LogoPrimeIcon } from "../../icons/logo-prime/logo-prime";
import { MagnifierIcon } from "../../icons/magnifier/magnifier";

import "./header.scss";
import { Toggle } from "../toggle/toggle";

const HOME_URL = "https://www.primevideo.com/";
const STORE_URL =
  "https://www.primevideo.com/storefront/ref=atv_hm_offers_c_9zZ8D2_1_2?contentType=home&contentId=store";
const CHANNELS_URL =
  "https://www.primevideo.com/storefront/ref=atv_hm_Categories_c_9zZ8D2_1_2?contentType=home&contentId=store&filterId=OFFER_FILTER%3DSUBSCRIPTIONS";
const CATEGORIES_URL =
  "https://www.primevideo.com/categories/ref=atv_hm_offers_c_9zZ8D2_1_3";
const SEARCH_URL = "https://google.com/";

export const NavigationBar = () => {
  return (
    <header className="header">
      <LogoPrimeIcon />
      <nav
        className="navigation-bar"
        aria-label={i18n("meta.home.header.ariaLabel.primaryMenu")}
      >
        <ul className="primary-menu">
          <li className="link-item__home">
            <a className="home" href={HOME_URL}>
              {i18n("meta.home.header.links.home")}
            </a>
          </li>
          <li className="link-item__store">
            <a className="store" href={STORE_URL}>
              {i18n("meta.home.header.links.store")}
            </a>
          </li>
          <li className="link-item__channels">
            <a className="channels" href={CHANNELS_URL}>
              {i18n("meta.home.header.links.channels")}
            </a>
          </li>
          <li className="link-item__categories">
            <a className="categories" href={CATEGORIES_URL}>
              {i18n("meta.home.header.links.categories")}
            </a>
          </li>
        </ul>
      </nav>
      <div
        aria-label={i18n("meta.home.header.ariaLabel.secondaryMenu")}
        className="toolbar__container"
      >
        <div className="toolbar__options">
          <ButtonLink
            ariaLabel={i18n("meta.home.header.ariaLabel.search")}
            to={SEARCH_URL}
            divId={"button-link-search-wrapper"}
            anchorId={"button-link-search-anchor"}
          >
            <MagnifierIcon></MagnifierIcon>
          </ButtonLink>
          <div class="menu-desktop">
            <Button
              ariaLabel={i18n("meta.home.header.ariaLabel.expandedMenu")}
              ariaExpanded={false}
            >
              <Toggle></Toggle>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
