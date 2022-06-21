//to run test : npm test --SumofCubes.test.js

const SumofCubes = require('./SumofCubes');

test('test1', () => {
    expect(SumofCubes([1, 5, 9])).toStrictEqual(855)
});
test('test2', () => {
    expect(SumofCubes([3, 4, 5])).toStrictEqual(216)
});
test('test3', () => {
    expect(SumofCubes([1, 1, 1])).toStrictEqual(3)
});
test('test4', () => {
    expect(SumofCubes([2])).toStrictEqual(8)
});
test('test5', () => {
    expect(SumofCubes([32])).toStrictEqual(32768)
});
test('test6', () => {
    expect(SumofCubes([5, 9, 4, 4, 9])).toStrictEqual(1711)
});
test('test7', () => {
    expect(SumofCubes([])).toStrictEqual(0)
});