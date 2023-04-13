import React from "react";
import i18n from "../../lib/i18n";

import { ButtonLink } from "../button-link/button-link";

import "./container-store.scss";

const RENT_URL =
  "https://www.primevideo.com/storefront/ref=atv_hm_offers_c_9zZ8D2_1_2?contentType=home&contentId=store&filterId=OFFER_FILTER%3DTVOD";

export const StoreContainer = () => {
  return (
    <section className="container-store">
      <h2 className="subtitle">
        {i18n("meta.home.containers.store.text.subtitle")}
      </h2>
      <p className="primary">
        {i18n("meta.home.containers.store.text.primary")}
      </p>
      <ButtonLink
        to={RENT_URL}
        ariaLabel={i18n("meta.home.containers.store.buttonLink.label.rent")}
        divId={"button-link-store-wrapper"}
        anchorId={"button-link-store-anchor"}
      >
        {i18n("meta.home.containers.store.buttonLink.label.rent")}
      </ButtonLink>
    </section>
  );
};
