import Cookies from 'js-cookie'

const Time = window.performance && window.performance.now
  ? window.performance
  : Date

function genRadomStr (uid) {
  const str = String(Time.now() + '' + Math.random()).replace(/\./g, '')
  const ret = str + '_' + (uid || '')
  return ret.length > 36 ? ret.substring(ret.length - 36) : ret
}

export default function setLocalProjectCookie (user) {
  user = user || {}
  const uid = (user.bole_info || {}).bole_id
  const tocStatic = Cookies.get('toc_static')

  if (!tocStatic || uid != tocStatic.split('_')[1]) {
    const randomStr = genRadomStr(uid)
    Cookies.set('toc_static', randomStr, { expires: 365 * 100 })
  }
}
