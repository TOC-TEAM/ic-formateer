import {formatDate, beforeToday,birthToAge} from '../src'

describe('date test', () => {
  test('default format', () => {
    const result = formatDate(1545036108942);
    expect(result).toBe('2018/12/17')
  });
  test('format yyyy-MM', ()=>{
    const result1 = formatDate(1545036108942, 'yyyy-MM');
    const result2 = formatDate(1545036108942, 'yyyy-MM-dd');
    const result3 = formatDate(1545036108942, 'yyyy-MM-dd HH:mm');
    const result4 = formatDate(1545036108942, 'yyyy-MM-dd HH:mm:ss');
    const result5 = formatDate(1545036108942, 'yyyy/MM');
    const result6 = formatDate(1545036108942, 'yyyy/MM/dd');
    const result7 = formatDate(1545036108942, 'yyyy/MM/dd HH:mm');
    const result8 = formatDate("1545036108942", 'yyyy/MM/dd HH:mm:ss');
    const result9 = formatDate(1545036108942, 'yyyy.MM');
    const result10 = formatDate(1545036108942, 'yyyy.MM.dd');
    const result11 = formatDate(1545036108942, 'yyyy.MM.dd HH:mm');
    const result12 = formatDate(1545036108942, 'yyyy.MM.dd HH:mm:ss');
    const result13 = formatDate('string', 'yyyy.MM.dd' +
      ' HH:mm:ss');

    expect(result1).toBe('2018-12');
    expect(result2).toBe('2018-12-17');
    expect(result3).toBe('2018-12-17 16:41');
    expect(result4).toBe('2018-12-17 16:41:48');
    expect(result5).toBe('2018/12');
    expect(result6).toBe('2018/12/17');
    expect(result7).toBe('2018/12/17 16:41');
    expect(result8).toBe('2018/12/17 16:41:48');
    expect(result9).toBe('2018.12');
    expect(result10).toBe('2018.12.17');
    expect(result11).toBe('2018.12.17 16:41');
    expect(result12).toBe('2018.12.17 16:41:48');
    expect(result13).toBe('string');
  })
});

describe('bafore now',()=>{
  test('now before now', ()=>{
    const result = beforeToday(Date.parse(new Date()));
    expect(result).toBe('刚刚')
  })
  test('now before 3hour', ()=>{
    const data = new Date();
    data.setHours(data.getHours()-3);
    const result = beforeToday(Date.parse(data));
    expect(result).toBe('3小时前')
  })
  test('now before 2min', ()=>{
    const data = new Date();
    data.setMinutes(data.getMinutes()-2);
    const result = beforeToday(Date.parse(data));
    expect(result).toBe('2分钟前');
  })

  test('now before 3 day', ()=>{
    const data = new Date();
    data.setDate(data.getDate()-2);
    const result = beforeToday(Date.parse(data));
    expect(result).toBe('2天前');
  })
  test('now before 1 week', () =>{
    const data =new Date();
    data.setDate(data.getDate()-8);
    const result = beforeToday(Date.parse(data));
    expect(result).toBe('1周前')
  })
  test('now before 2 mouth', ()=>{
    const data = new Date();
    data.setMonth(data.getMonth()-2);
    const result = beforeToday(Date.parse(data));
    expect(result).toBe('2个月前');
  })
  test('now before 2008', ()=>{
    const data = new Date();
    data.setFullYear(2008);
    const result = beforeToday(Date.parse(data));
    expect(result).toBe('1年前');
  })
  test('/1000', ()=>{
    const data = new Date();
    data.setFullYear(2008);
    const result = beforeToday(String(Date.parse(data)/1000));
    expect(result).toBe('1年前');
  })
  test('2018-10-29 14:38:38', ()=>{
    const result = beforeToday('2018-10-29 14:38:38');
    expect(result).toBe('1个月前');
  })
  test('2019-10-29 14:38:38', ()=>{
    const result = beforeToday('2019-10-29 14:38:38');
    expect(result).toBe('');
  })
})
describe('birthToAge', ()=>{
  test('birthToAge', ()=>{
    const result1 = birthToAge('');
    expect(result1).toBe('');
    const result2 = birthToAge('2345678');
    expect(result2).toBe('');
    const result3 = birthToAge('1992-05');
    expect(result3).toBe('27');
    const result4 = birthToAge('1992-5');
    expect(result4).toBe('');
  })
})
