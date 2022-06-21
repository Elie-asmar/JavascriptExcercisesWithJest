const sortByLength = require('./SortArrayByStringLength');
console.log('sortByLength', require('./SortArrayByStringLength'))



test('test1', () => {
    expect(sortByLength(["Google", "Apple", "Microsoft"])).toStrictEqual(["Apple", "Google", "Microsoft"])
});
test('test2', () => {
    expect(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])).toStrictEqual(["Raphael", "Leonardo", "Donatello", "Michelangelo"])
});
test('test3', () => {
    expect(sortByLength(["Turing", "Einstein", "Jung"])).toStrictEqual(["Jung", "Turing", "Einstein"])
});
test('test4', () => {
    expect(sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"])).toStrictEqual(["Hoth", "Yavin", "Tatooine", "Dantooine"])
});
test('test5', () => {
    expect(sortByLength(["Mario", "Bowser", "Link"])).toStrictEqual(["Link", "Mario", "Bowser"])
});
