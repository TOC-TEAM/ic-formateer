/**
 * 格式化学历
 * @param key {Number} 学历id
 * @returns {String} 格式化后的输出
 */
export function formatDegree (key=0) {
  if (key>99){
    key = 99
  }
  const map = {
    0: '学历不限',
    1: '本科',
    2: '硕士',
    3: '博士',
    4: '专科',
    6: 'MBA',
    10: '博士后',
    86: '初中',
    87: '职高',
    89: '高中',
    90: '中专',
    91: '中技',
    92: '专升本',
    94: 'EMBA',
    95: 'MPA',
    99: '其他'
  }
  return map[key]
}
/**
* @Description 转义 HTML 代码
* @Param {String}
* @return {String}
* @Date: 2018/12/19
*/
export function escapeHTML(str) {
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };
  return str.replace(/[&<>]/g, o => escapeMap[o]);
}
/**
* @Description
* @Param {String}
* @return {String}
* @Date: 2018/12/19
*/
export function textEscape(text, length=10) {
  if (text.length > length) {
    return text.substring(0, length) + '...'
  } else {
    return text
  }
}
