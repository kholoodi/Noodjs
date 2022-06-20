const { expect } = require('@jest/globals');
const math = require('./math');
// to  do test 
//test('test message', test operation)
test('add 1 to 2 equal 3',()=>{
    expect(math.sum(1,2)).toBe(3);
})