// const city_list = require('../assets/city-list.json')
// const HOT_list = require('../assets/hot-city-list.json')
/**
 * position in formatter.
 * @module ic-formatter#position
 */
module.exports = {
  /**
   * @description 格式化工作经验
   * @param {Number} begin 最少工作经验
   * @param {Number} end 最多工作经验
   * @returns {String} 格式化后的工作经验
   */
  formatExperience: (begin, end) => {
    begin = begin || 0
    end = end || 0
    const experienceTexts = [
      `${end}年以内`,
      `${begin}-${end}年`,
      `${begin}年以上`,
      '经验不限',
    ]
    // let index = 3
    if (begin == 0 && end != 0) {
      return experienceTexts[0]
    }
    if (begin > 0 && end > begin) {
      return experienceTexts[1]
    }
    if (begin > 0) {
      return experienceTexts[2]
    }
    return experienceTexts[3]
  },

  /**
   * @description 格式化薪资
   * @param {Number} begin 最低薪资
   * @param {Number} end 最高薪资
   * @returns {String} 薪资区间
   */
  formatDetailSalary: (begin, end, annualBegin = 0, annualEnd = 0) => {
    begin = isNaN(begin) ? 0 : (begin / 1000).toFixed(0)
    end = isNaN(end) ? 0 : (end / 1000).toFixed(0)
    annualBegin = (+annualBegin / 10000).toFixed(0)
    annualEnd = (+annualEnd / 10000).toFixed(0)
    if (annualBegin > 0 || annualEnd > 0) {
      if (annualBegin == 1 && annualEnd == 500) {
        return '面议'
      } else if (annualBegin <= 0 || annualBegin === annualEnd) {
        return annualEnd + 'w'
      } else {
        return annualBegin + '-' + annualEnd + 'w'
      }
    } else if (begin > 0 || end > 0) {
      if (begin == 1 && end == 500) {
        return '面议'
      } else if (begin > 0 && end > 0) {
        return begin + (begin !== end ? ' - ' + end : '') + 'k'
      } else if (begin > 0) {
        return begin + 'k+'
      } else if (end > 0) {
        return end + 'k以内'
      }
    } else {
      return '面议'
    }
  },
  /**
   * @Description 格式化工作经验中的时间
   * @Param {Object} work 工作数据
   * @Param {string} work.start_time 工作开始时间
   * @Param {string} work.end_time 工作结束时间
   * @return {String} 工作年限
   * @Date: 2018/12/17
   */
  formatWorkTime: work => {
    let start =
      work.start_time && work.start_time.replace(/年/, '.').replace(/月/, '')
    let end =
      work.end_time && work.end_time.replace(/年/, '.').replace(/月/, '')
    let sofar = work.so_far
    if (!work.start_time) return ''
    if (sofar == 'Y' || ((start != '' && end == '') || sofar == '')) {
      return `${start}-至今`
    } else if (start == '' || end == '') {
      return ''
    } else {
      return `${start}-${end}`
    }
  },

  /**
   * @description 格式化地点
   * @param {Object[]} item 地点
   * @returns {string} 格式化后的输出
   */
  formatCity: item => {
    let city = []
    for (let index in item) {
      city.push(item[index])
    }
    return city.join('、')
  },
  // formatCityJson: () => {
  //   const cities = []
  //   Object.keys(city_list).forEach(item => {
  //     const obj = {
  //       title: item,
  //       children: city_list[ item ]
  //     }
  //     cities.push(obj)
  //   })
  //   if (HOT_list) {
  //     cities.unshift({
  //       title: '热',
  //       children: HOT_list
  //     })
  //   }
  //   return cities
  // },
  // getCityName: (id) => {
  //   if (!id) return
  //   id = '' + id
  //   const city = module.exports.formatCityJson(city_list, HOT_list)
  //   let name = ''
  //   if (id.indexOf(',') > -1) {
  //     const cityArray = id.split(',')
  //     cityArray.map(item => {
  //       name += module.exports.getCityName(item) + '、'
  //     })
  //   } else {
  //     city.forEach(item => {
  //       item.children.forEach(item => {
  //         if (item.id == id) name = item.name
  //       })
  //     })
  //   }
  //   return name.replace(/[、?]$/, "")
  // }
}
