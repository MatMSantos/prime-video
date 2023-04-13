import React from "react";
import i18n from "../../lib/i18n";

import { ImageWatchIcon } from "../../icons/image-watch/image-watch";
import { ImageDownloadIcon } from "../../icons/image-download/image-download";
import { ImageSaveIcon } from "../../icons/image-save/image-save";

import "./container-benefits.scss";

export const BenefitsContainer = () => {
  return (
    <section className="benefits-container">
      <ImageWatchIcon></ImageWatchIcon>
      <h3 className="subtitle" id="">
        {i18n("meta.home.containers.benefits.text.watch.subtitle")}
      </h3>
      <p className="primary">
        {i18n("meta.home.containers.benefits.text.watch.primary")}
      </p>
      <ImageDownloadIcon></ImageDownloadIcon>
      <h3 className="subtitle">
        {i18n("meta.home.containers.benefits.text.download.subtitle")}
      </h3>
      <p className="primary">
        {i18n("meta.home.containers.benefits.text.download.primary")}
      </p>
      <ImageSaveIcon></ImageSaveIcon>
      <h3 className="subtitle">
        {i18n("meta.home.containers.benefits.text.save.subtitle")}
      </h3>
      <p className="primary">
        {i18n("meta.home.containers.benefits.text.save.primary")}
      </p>
    </section>
  );
};
