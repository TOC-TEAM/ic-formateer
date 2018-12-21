/**
 * @Description
 * @Param timestamp{String}
 * @Param formate{String}
 * @return {String} 格式化的日期
 * @Date: 2018/12/17
 */
export function formatDate(timestamp, formate) {
  timestamp = typeof timestamp === 'string' ? timestamp : String(timestamp)
  const padZero = n => n < 10 ? `0${n}` : n
  const t = Date.parse(Date.now())

  if (/^\d+$/.test(timestamp)) {
    timestamp = timestamp.length > t.length
      ? timestamp / 1000
      : timestamp.length < t.length
        ? timestamp * 1000
        : timestamp
    const d = new Date(timestamp * 1)
      , y = d.getFullYear()
      , m = padZero(d.getMonth() + 1)
      , dt = padZero(d.getDate())
      , h = padZero(d.getHours())
      , min = padZero(d.getMinutes())
      , s = padZero(d.getSeconds())
    switch ( formate ) {
      case 'yyyy-MM':
        return `${y}-${m}`
      case 'yyyy-MM-dd':
        return `${y}-${m}-${dt}`
      case 'yyyy-MM-dd HH:mm':
        return `${y}-${m}-${dt} ${h}:${min}`
      case 'yyyy-MM-dd HH:mm:ss':
        return `${y}-${m}-${dt} ${h}:${min}:${s}`
      case 'yyyy/MM':
        return `${y}/${m}`
      case 'yyyy/MM/dd':
        return `${y}/${m}/${dt}`
      case 'yyyy/MM/dd HH:mm':
        return `${y}/${m}/${dt} ${h}:${min}`
      case 'yyyy/MM/dd HH:mm:ss':
        return `${y}/${m}/${dt} ${h}:${min}:${s}`
      case 'yyyy.MM':
        return `${y}.${m}`
      case 'yyyy.MM.dd':
        return `${y}.${m}.${dt}`
      case 'yyyy.MM.dd HH:mm':
        return `${y}.${m}.${dt} ${h}:${min}`
      case 'yyyy.MM.dd HH:mm:ss':
        return `${y}.${m}.${dt} ${h}:${min}:${s}`
      default:
        return `${y}/${m}/${dt}`
    }
  }

  // already format
  return timestamp
}

/**
 * @Description
 * @Param time
 * @return {String} 格式化的日期,返回。。。前
 * @Date: 2018/12/17
 */
export function beforeToday(time) {
  if (!time) return '';
  let updateTime;
  if (time.length === 10) {
    updateTime = time * 1000
  } else {
    updateTime = time
  }
  if (time.toString().indexOf('-') > -1) {
    updateTime = new Date(Date.parse(time.replace(/-/g, '/'))).getTime()
  }

  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - updateTime

  if (diffValue < 0) {
    return ''
  }

  const monthC = diffValue / month
  const weekC = diffValue / week
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  let result
  if (monthC > 12) {
    // result = /\d{4}-\d{1,2}-\d{1,2}/g.exec(time)[0];
    result = '1年前'
  } else if (monthC >= 1) {
    result = parseInt(monthC) + '个月前'
    // result = '3天前'
  } else if (weekC >= 1) {
    result = parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

export function birthToAge(birth) {
  if (!birth) {
    return ''
  }
  if (/[0-9]{4}[-][0-9]{2}/g.test(birth)) {
    return (new Date()).getFullYear() - birth.split('-')[ 0 ] + 1 + ''
  } else {
    return ''
  }
}