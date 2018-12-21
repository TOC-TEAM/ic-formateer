import {formatExperience, formatDegree, formatDetailSalary, formatWorkTime, formatCity,getCityName} from '../src/position'

describe('postion test', ()=>{
  test('formatExperience', ()=>{
    const resultExperience1 = formatExperience();
    expect(resultExperience1).toBe('经验不限');
    const resultExperience2 = formatExperience(3,5);
    expect(resultExperience2).toBe('3-5年');
    const resultExperience3 = formatExperience(3);
    expect(resultExperience3).toBe('3年以上');
    const resultExperience4 = formatExperience(0,5);
    expect(resultExperience4).toBe('5年以内');
  })
  test('formatDetailSalary', ()=>{
    const result1 = formatDetailSalary(12000,15000);
    expect(result1).toBe('12 - 15k');
    const result2 = formatDetailSalary('12000',16000);
    expect(result2).toBe('12 - 16k');
    const result3 = formatDetailSalary('0',0);
    expect(result3).toBe('面议');
    const result4 = formatDetailSalary(0,0);
    expect(result4).toBe('面议');

  })
  test('formatWorkTime', ()=>{
    const result1 = formatWorkTime({start_time: "2018-04",so_far: "Y",});
    expect(result1).toBe("2018-04-至今");
    // const result2 = formatWorkTime({start_time: "2018-04",so_far: "Y",});
    // expect(result2).toBe("2018-04-2018.04")
    const result3 = formatWorkTime({start_time: "",so_far: "",});
    expect(result3).toBe("")
  })
  test('formatCity',()=>{
    const result1 = formatCity(['北京', '上海', '香港']) ;
    expect(result1).toBe('北京、上海、香港');
    // const result2 = formatcity({1:'北京', 2:'上海', 3:'香港'}) ;
    // expect(result2).toBe('北京、上海、香港');
  })
  test('getCityName',()=>{
    const result1 = getCityName("229,106,268") ;
    expect(result1).toBe("广州、南京、成都");
    const result2 = getCityName("229") ;
    expect(result2).toBe('广州');
  })
})
