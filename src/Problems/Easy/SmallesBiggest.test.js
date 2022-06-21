//to run test : npm test --smallestbiggest
const minMax = require('./SmallestBiggest');


test('test1', () => {
    expect(minMax([14, 35, 6, 1, 34, 54])).toStrictEqual([1, 54])
});
test('test2', () => {
    expect(minMax([1.346, 1.6532, 1.8734, 1.8723])).toStrictEqual([1.346, 1.8734])
});
test('test3', () => {
    expect(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])).toStrictEqual([0.2345, 0.984])
});
test('test4', () => {
    expect(minMax([13, 72, 98, 43, 24, 65, 31])).toStrictEqual([13, 98])
});
test('test5', () => {
    expect(minMax([-54, -23, -54, -21])).toStrictEqual([-54, -21])
});
test('test6', () => {
    expect(minMax([-0.473, -0.6834, -0.1287, 0.5632])).toStrictEqual([-0.6834, 0.5632])
});
test('test7', () => {
    expect(minMax([0, 0, 0, 0])).toStrictEqual([0, 0])
});



