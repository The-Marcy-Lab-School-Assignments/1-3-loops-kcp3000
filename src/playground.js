// const {
//   loop0UpTo10,

const loop0UpTo10 = () => {
    //let arr = [];
    for (let i = 0; i < 10; i++) {
        //arr.push(i)
        console.log(i)
    };
    //console.log(arr.join(', '))
}
//loop0UpTo10()

//   loop5to10,

const loop5to10 = () => {
    for (let i = 5; i <= 10; i++) {
        console.log(i)
    }
}
//loop5to10()

//   loopEvenNumbersUpTo10,

const loopEvenNumbersUpTo10 = () => {
    for (let i = 0; i < 9; i += 2) {
        console.log(i)
    };
};
//loopEvenNumbersUpTo10()

//   countdown5to0,

const countdown5to0 = () => {
    for (let i = 5; i >= 0; i--) {
        console.log(i);
    };
};
//countdown5to0()

//   loopUpToNum,

const loopUpToNum = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(i);
    };
};
//loopUpToNum(40)

//   fizzbuzz,

const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('fuzzbuzz')
        if (i % 5 === 0 && i % 3 !== 0) console.log('buzz')
        if (i % 3 === 0 && i % 5 !== 0) console.log('fizz')
        if (i % 3 !== 0 && i % 5 !== 0) console.log(i)
    };
};
//fizzbuzz()

// } = require('./from-scratch');
// const {
//   whileToFor,
//   continueGuardClause,
// } = require('./modify');
// const {
//   brokenNested,
//   brokenLoop,
// } = require('./debug');

// for (let i = 0; i < 10; i++) {
//     if (!(i > 7)) //break;
//         console.log(i)
// }