<div
        aria-label={i18n("meta.home.header.ariaLabel.secondaryMenu")}
        className="secondary-menu"
      >
        <div className="search">
          <ButtonLink
            ariaLabel={i18n("meta.home.header.ariaLabel.search")}
            to={SEARCH_URL}
          >
            <MagnifierIcon></MagnifierIcon>
          </ButtonLink>
        </div>
        <div className="options">
          <div className="toolbar">
            <nav>
              <Button
                onClick={() => setMenuExpansion(!menuExpansion)}
                aria-expanded={menuExpansion}
                aria-label={i18n("meta.home.header.ariaLabel.areaMenu")}
              >
                <AvatarIcon></AvatarIcon>
              </Button>
              <Button
                aria-label={i18n("meta.home.header.ariaLabel.expandedMenu")}
              >
                <ArrowIcon></ArrowIcon>
              </Button>
              <ul className="expanded-menu">
                <li className="expanded-menu__login">
                  <a
                    aria-label={i18n("meta.home.header.ariaLabel.login")}
                    aria
                    className="login"
                    href={LOGIN_URL}
                  >
                    {i18n("meta.home.header.links.login")}
                  </a>
                </li>
                <li className="expanded-menu__help">
                  <a
                    aria-label={i18n("meta.home.header.ariaLabel.help")}
                    className="help"
                    href={HELP_URL}
                  >
                    {i18n("meta.home.header.links.help")}
                  </a>
                </li>
                <li className="expanded-menu__watch">
                  <a
                    aria-label={i18n("meta.home.header.ariaLabel.watch")}
                    className="login"
                    href={WATCH_URL}
                  >
                    {i18n("meta.home.header.links.watch")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>




const LOGIN_URL =
  "https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fna.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg-1Lx6IPVykj_cfDtSsKgXCvetxk-JMndZhhIx-QF0v8AAAAAQAAAABkNiiBcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2Foffers%2Fnonprimehomepage%3Fref_%253Datv_auth_signout&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_br&openid.mode=checkid_setup&siteState=133-6331700-8248315&language=pt_BR&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
const HELP_URL = "https://www.primevideo.com/help/ref=atv_nb_hp";
const WATCH_URL =
  "https://www.primevideo.com/splash/watchAnywhere/ref=atv_nb_wa";

  const [menuExpansion, setMenuExpansion] = useState(false); , { useState }