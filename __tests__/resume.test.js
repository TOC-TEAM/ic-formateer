
import {formatDegree,escapeHTML,textEscape} from '../src/resume'
describe("",()=>{
  test('formatDegree', ()=>{
    const resultDegree1 = formatDegree(3);
    expect(resultDegree1).toBe('博士');
    const resultDegree2 = formatDegree(0);
    expect(resultDegree2).toBe('学历不限');
    const resultDegree3 = formatDegree();
    expect(resultDegree3).toBe('学历不限');
    const resultDegree4 = formatDegree(1000);
    expect(resultDegree4).toBe('其他');
    const resultDegree5 = formatDegree('1');
    expect(resultDegree5).toBe('本科');
  })
  test('escapeHTML', ()=>{
    const result =escapeHTML('<div>sss</div>');
    expect(result).toBe('&lt;div&gt;sss&lt;/div&gt;')
  })
  test('textEscape', ()=>{
    const result1 = textEscape('123456789abcde');
    expect(result1).toBe('123456789a...');
    const result2 = textEscape('12345678');
    expect(result2).toBe('12345678');
    const result3 = textEscape('123456789abcde',5);
    expect(result3).toBe('12345...');
  })
})
