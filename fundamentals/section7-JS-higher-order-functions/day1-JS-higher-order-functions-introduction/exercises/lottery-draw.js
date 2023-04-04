const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Luck day, you won!' : 'Try Again!';
}

console.log(lotteryResult(2, numberChecker));
