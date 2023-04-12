import React from "react";
import i18n from "../../lib/i18n";

import { ButtonLink } from "../button-link/button-link";
import { LogoAdrenalinaIcon } from "../../icons/logo-adrenalina/logo-adrenalina";
import { LogoDiscoveryIcon } from "../../icons/logo-discovery/logo-discovery";
import { LogoImovisionIcon } from "../../icons/logo-imovision/logo-imovision";
import { LogoLionsgateIcon } from "../../icons/logo-lionsgate/logo-lionsgate";
import { LogoLookeIcon } from "../../icons/logo-looke/logo-looke";
import { LogoMGMIcon } from "../../icons/logo-mgm/logo-mgm";
import { LogoParamountIcon } from "../../icons/logo-paramount/logo-paramount";
import { LogoPremiereIcon } from "../../icons/logo-premiere/logo-premiere";
import { LogoStingrayIcon } from "../../icons/logo-stingray/logo-stingray";

import "./container-channels.scss";

const PARAMOUNT_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_paramountplusbr?benefitId=paramountplusbr";
const PREMIERE_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_%20premierefcbr?benefitId=premierefcbr";
const LIONSGATE_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_starzplaybr?benefitId=starzplaybr";
const DISCOVERY_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_%20discoveryplusbr?benefitId=discoveryplusbr";
const MGM_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_mgmbr?benefitId=mgmbr";
const LOOKE_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_lookebr?benefitId=lookebr";
const IMOVISION_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_imovisionbr?benefitId=imovisionbr";
const ADRENALINA_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_adrenalinapurabr?benefitId=adrenalinapurabr";
const STINGRAY_URL =
  "https://www.primevideo.com/gp/video/offers/ref=dvm_MLP_BR_3P_stingraybr?benefitId=stingraybr";

const className = "logo-icon";

export const ChannelsContainer = () => {
  return (
    <section className="container-channels">
      <h2 className="subtitle">
        {i18n("meta.home.containers.channels.text.subtitle")}
      </h2>
      <p className="primary">
        {i18n("meta.home.containers.channels.text.primary")}
      </p>
      <ul
        aria-label={i18n(
          "meta.home.containers.channels.buttonLink.ariaLabel.channelsCollection"
        )}
        className="channels-collection"
      >
        <li className="channels-collection__item ">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.paramount"
            )}
            to={PARAMOUNT_URL}
          >
            <LogoParamountIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.premiere"
            )}
            to={PREMIERE_URL}
          >
            <LogoPremiereIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.lionsgate"
            )}
            to={LIONSGATE_URL}
          >
            <LogoLionsgateIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.discovery"
            )}
            to={DISCOVERY_URL}
          >
            <LogoDiscoveryIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.mgm"
            )}
            to={MGM_URL}
          >
            <LogoMGMIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.looke"
            )}
            to={LOOKE_URL}
          >
            <LogoLookeIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.imovision"
            )}
            to={IMOVISION_URL}
          >
            <LogoImovisionIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.adrenalina"
            )}
            to={ADRENALINA_URL}
          >
            <LogoAdrenalinaIcon className={className} />
          </ButtonLink>
        </li>
        <li className="channels-collection__item">
          <ButtonLink
            ariaLabel={i18n(
              "meta.home.containers.channels.buttonLink.ariaLabel.stingray"
            )}
            to={STINGRAY_URL}
          >
            <LogoStingrayIcon className={className} />
          </ButtonLink>
        </li>
      </ul>
    </section>
  );
};
