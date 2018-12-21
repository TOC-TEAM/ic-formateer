
import {formatDegree} from '../src'
describe("index",()=>{
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
})
