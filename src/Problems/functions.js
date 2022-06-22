function* generator(i) {
    while (i < Infinity) {
        yield i++
    }


}


const range = (l, u = Infinity) => function* () {
    while (true) {
        if (l < u) {
            yield l++;
            //continue;
        }
        return l;
    }
};


let r = range(10, 11);
console.log(r().next().value)
console.log(r().next().value)
console.log(r().next().value)
console.log(r().next().value)






// const gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);