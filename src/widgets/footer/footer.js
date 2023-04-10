import React  from 'react'
import i18n from '../../lib/i18n'
import moment from 'moment/moment'

// import { LogoIcon } from '../../icons/logo/logo'

// import 'widgets/footer/footer.scss'

const TERMS_AND_POLICIES_URL = 'https://www.primevideo.com/help?nodeId=202064890'
const COMMENTS_URL = 'https://www.primevideo.com/region/na/help/contact-us?ref_=atv_auth_red_aft'
const HELP_URL = 'https://www.primevideo.com/help/ref=dvm_MLP_NA_help'

const year = moment().format('YYYY')

export const Footer = () => {
  return (
    <footer className='footer'>
      <a
        aria-label={i18n('meta.home.footer.text.terms')}
        className='link-terms'
        href={TERMS_AND_POLICIES_URL}
      >{i18n('meta.home.footer.text.terms')}</a>
      &nbsp;|&nbsp;
      <a
        aria-label={i18n('meta.home.footer.text.comments')}
        className='link-comments'
        href={COMMENTS_URL}
      >{i18n('meta.home.footer.text.comments')}</a>
      &nbsp;|&nbsp;
      <a
        aria-label={i18n('meta.home.footer.text.help')}
        className='link-help'
        href={HELP_URL}
      >{i18n('meta.home.footer.text.help')}</a>
      <p className='text'>
        © 1996-{year}, Amazon.com, Inc. ou suas afiliadas 
      </p>
    </footer>
  )
}
