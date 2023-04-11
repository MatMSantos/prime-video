import React from "react"
import i18n from '../../lib/i18n'

import { ButtonLink } from '../button-link/button-link'

import './container-landing.scss'

const SIGNIN_URL = 'https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fna.primevideo.com%2Fregion%2Fna%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg-vs-bmWfP8_txoX0J6_JxmNJJkEijbOcDP8hoA4Rl2LAAAAAQAAAABkM1LdcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2Fregion%2Fna%2F%3Fref_%253Datv_auth_pre&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_br&openid.mode=checkid_setup&siteState=135-9131895-1987401&language=pt_BR&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'
const TRIAL_URL = 'https://www.primevideo.com/region/na/gp/video/signup?dvah=signup&_encoding=UTF8&ref_=dvm_MLP_BR_Join_1_ft'

export const LandingContainer = () => {
  return (
    <section className="container-landing">
      <h2 className="subtitle">{i18n('meta.home.containers.landing.text.subtitle')}</h2>
      <p className="primary">{i18n('meta.home.containers.landing.text.primary')}</p>
      <p className="secondary">{i18n('meta.home.containers.landing.text.secondary')}</p>
      <ButtonLink
        to={SIGNIN_URL}
        textLabel={i18n('meta.home.containers.landing.buttonLink.label.signIn')}
      />
      <div className="divider-wrapper">
        <span className="left" />
        <div className="or-with-divider">ou</div>
        <span className="right" />
      </div>
      <ButtonLink
        to={TRIAL_URL}
        textLabel={i18n('meta.home.containers.landing.buttonLink.label.trial')}
      />
    </section>
  )
} 
