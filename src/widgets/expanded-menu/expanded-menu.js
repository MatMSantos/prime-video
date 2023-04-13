import React from "react";
import i18n from "../../lib/i18n";

import { ButtonLink } from "../button-link/button-link";

import "../expanded-menu/expanded-menu.scss";

// const [menuExpansion, setMenuExpansion] = useState(false); , { useState }

const LOGIN_URL =
  "https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fna.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg-1Lx6IPVykj_cfDtSsKgXCvetxk-JMndZhhIx-QF0v8AAAAAQAAAABkNiiBcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2Foffers%2Fnonprimehomepage%3Fref_%253Datv_auth_signout&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_br&openid.mode=checkid_setup&siteState=133-6331700-8248315&language=pt_BR&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
const HELP_URL = "https://www.primevideo.com/help/ref=atv_nb_hp";
const WATCH_URL =
  "https://www.primevideo.com/splash/watchAnywhere/ref=atv_nb_wa";
const SUBSCRIBE_URL =
  "https://www.primevideo.com/region/na/gp/video/signup?dvah=signup&_encoding=UTF8&ref_=dvm_MLP_BR_Join_1_ft";

export const ExpandedMenu = () => {
  return (
    <ul className="expanded-menu">
      <li className="expanded-menu__login">
        <a className="login" href={LOGIN_URL}>
          {i18n("meta.home.expandedMenu.text.login")}
        </a>
      </li>
      <li className="expanded-menu__help">
        <a className="help" href={HELP_URL}>
          {i18n("meta.home.expandedMenu.text.help")}
        </a>
      </li>
      <li className="expanded-menu__watch">
        <a className="watch" href={WATCH_URL}>
          {i18n("meta.home.expandedMenu.text.watch")}
        </a>
      </li>
      <li className="expanded-menu__subscribe">
        <ButtonLink anchorId={"subscribe"} to={SUBSCRIBE_URL}>
          {i18n("meta.home.expandedMenu.text.subscribe")}
        </ButtonLink>
      </li>
    </ul>
  );
};