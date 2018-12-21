import { beforeToday,birthToAge} from '../src'

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
