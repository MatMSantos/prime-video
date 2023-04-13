import React from "react";
import i18n from "../../lib/i18n";

import { ImageWatchIcon } from "../../icons/image-watch/image-watch";
import { ImageDownloadIcon } from "../../icons/image-download/image-download";
import { ImageSaveIcon } from "../../icons/image-save/image-save";

import "./container-benefits.scss";

export const BenefitsContainer = () => {
  return (
    <section className="benefits-container">
      <ImageWatchIcon id="col-1"></ImageWatchIcon>
      <h3 className="subtitle" id="col-1">
        {i18n("meta.home.containers.benefits.text.watch.subtitle")}
      </h3>
      <p className="primary" id="col-1">
        {i18n("meta.home.containers.benefits.text.watch.primary")}
      </p>
      <ImageDownloadIcon id="col-2"></ImageDownloadIcon>
      <h3 className="subtitle" id="col-2">
        {i18n("meta.home.containers.benefits.text.download.subtitle")}
      </h3>
      <p className="primary" id="col-2">
        {i18n("meta.home.containers.benefits.text.download.primary")}
      </p>
      <ImageSaveIcon id="col-3"></ImageSaveIcon>
      <h3 className="subtitle" id="col-3">
        {i18n("meta.home.containers.benefits.text.save.subtitle")}
      </h3>
      <p className="primary" id="col-3">
        {i18n("meta.home.containers.benefits.text.save.primary")}
      </p>
    </section>
  );
};
