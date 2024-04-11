/** FEEDBACK: As a habit, you should remove any commented out code before submitting! */
const loop0UpTo10 = () => {
  //let arr = [];
  for (let i = 0; i < 10; i++) {
    //arr.push(i)
    console.log(i)
  };
};

const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i)
  };
};

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 9; i += 2) {
    console.log(i)
  };
};

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  };
};

const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  };
};
/** FEEDBACK: I love that you are covering your bases however I do want to name that if you were to use if/else statements, you could avoid being specific with many singular if statements as the if/else statements would be interconnected and based off of one another. 
 * The code could look like this instead:
 * const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
      } else if (i % 5 === 0){
        console.log('buzz')
      } else if (i % 3 === 0){
        console.log('fizz')
      } else {
        console.log(i)
      }
    };
  };
 * Notice the conditions and how they go from very specific to broad! 
 * Also notice the way I spaced things out so that I could see where one condition ended and another started! 
 */
const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz')
    if (i % 5 === 0 && i % 3 !== 0) console.log('buzz')
    if (i % 3 === 0 && i % 5 !== 0) console.log('fizz')
    if (i % 3 !== 0 && i % 5 !== 0) console.log(i)
  };
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
