import _get from 'lodash/get'
import _memoize from 'lodash/memoize'
import _isString from 'lodash/isString'
import _template from 'lodash/template'
import { ptBR } from './i18n/pt-BR'

const getTemplate = _memoize((message) =>
  _template(message, { interpolate: /{([\s\S]+?)}/g }))

export const i18n = (key, data) => {
  const value = _get(ptBR, key)
  if (_isString(value)) return getTemplate(value)(data)
  return value
}

export default i18n

