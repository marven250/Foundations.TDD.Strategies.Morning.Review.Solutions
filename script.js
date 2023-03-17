// --------------------------
//#region Guard
// --------------------------

/**
 * @param {number} a
 * @param {number} b 
 * @returns the product of `a` and `b` 
 * _unless_ either of the parameters is not a number,
 * in which case the string `"error"` is returned.
 */
 function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error";
  }

  return a * b;
}

function vote(age){
    if(age < 18) {
      return  "You must be 18 or older to vote."
    }else return "Who would you like to vote for?"
}

function concatenateStrings(s1, s2){
  if(typeof s1 !== "string" || typeof s2 !== "string") return "error";

  return s1 + s2;
}

function sumToN(n){
    if(n<=0) return 0;

    let sum = 0;

    for(let i =1; i<= n; i++){
      sum += i
    }

    return sum;
}

function factorial(n){
    if(n == 0) return 1;
    if(!Number. isInteger(n) || n <0) return "error";

    let result =1;

    for(let i =2; i<=n; i++){
      result*= i
    }

    return result;
}

function buildNArray(n){
    if(n <= 0) return [];
    if(!Number. isInteger(n)) return "error"

    let result = [];

    for(let i =1; i<= n; i++){
      result.push(i)
    }

    return result;
}

function findLongestString(stringsArray){
    if(stringsArray.length == 0) return ""

    let longest = stringsArray[0];

    for(let i=1; i< stringsArray.length; i++){
      if(longest.length < stringsArray[i].length) longest = stringsArray[i];
    }

    return longest;

}

function countPresent(attendance){
      let count =0;

      for(let i =0; i< attendance.length; i++){
        if(attendance[i]) count++
      }

      return count;
}

function getDnaComplement(dna){
      let complement = "";

      for(let i =0; i< dna.length; i++){
        if(dna[i] == "A"){
          complement+= "T"
        }else if(dna[i] == "T"){
          complement+= "A"
        }else if(dna[i] == "C"){
          complement+= "G"
        }else if(dna[i] == "G"){
          complement+= "C"
        }
      }

      return complement;
}

function isAllEven(numbersArray){
    for(let i =0; i< numbersArray.length; i++){
      if(numbersArray[i] % 2 !== 0) return false
    }

    return true;
}
function evenAndOdd(numbersArray){
    const evens = [];
    const odds = [];

    for(let i =0; i< numbersArray.length; i++){
        if(numbersArray[i] % 2 == 0){
          evens.push(numbersArray[i]);
        }else odds.push(numbersArray[i]);
    }

    return [evens, odds]

}

function exponentiate(b, p){

    if(!Number. isInteger(b) || !Number. isInteger(p)) return "error";

    let result = b;

    for(let i = 1; i< p; i++){
      result *= b;
    }

    return result;
}

function onlyOdds(num){
  let result =0;
  if(num < 1) return 0;

  for(let i =1; i<= num; i++){
    if(i % 2 !== 0) result+= i
  }

  return result;
}

function bacteriaTime(current, target){
  if(target < current) return "target must be larger than current";
  let time = 0;
  while(current < target){
    current*=2;
    time+= 20;
  }

  return time
}

function getAverage(numbersArray){
    if(numbersArray.length == 0) return null;
    let result = 0;
    for(let i =0; i< numbersArray.length; i++){
      result+= numbersArray[i]
    }

    result /= numbersArray.length;
    return result
}

// - P = 1 cent, N = 5 cents, D = 10 cents, Q = 25 cents
function countCoins(stringsArray){
    let totalValue = 0;

    for(let i =0; i< stringsArray.length; i++){
      if(stringsArray[i] == "P"){
        totalValue+= 1;
      }else if(stringsArray[i] == "N"){
        totalValue+= 5;
      }else if(stringsArray[i] == "D"){
        totalValue+= 10;
      }else if(stringsArray[i] == "Q"){
        totalValue+= 25
      }
    }

    return totalValue;
}


function getPairs(num){
    if(!Number.isInteger(num) || num <= 0) return "error";

    const result = [];

    for(let i= 1; i<= num; i++){
      for(let j =i; j<= num; j++){
        result.push([i, j])
      }
    }

    return result;

}
//#endregion Guard

// --------------------------
//#region Accumulator Variable
// --------------------------

/**
 * @param {int[]} nums 
 * @returns the sum of the given array of numbers
 */
function sumArray(nums) {
  let total = 0;
  for (const number of nums) {
    total += number;
  }
  return total;
}

//#endregion Accumulator Variable

// --------------------------
//#region Conditional Accumulation
// --------------------------

/**
 * @param {int[]} nums 
 * @returns the greatest number in the given array
 */
function findMax(nums) {
  let max = -Infinity;
  for (const number of nums) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

//#endregion Conditional Accumulation

// --------------------------
//#region Return Timing
// --------------------------

/**
 * @param {string} song 
 * @param {string[]} playlist 
 * @returns whether the given song can be found in the playlist
 */
function isSongInPlaylist(song, playlist) {
  for (const s of playlist) {
    if (s === song) {
      return true;
    }
  }
  return false;
}

//#endregion Return Timing

// --------------------------
//#region Nested Loops and Arrays
// --------------------------

/**
 * @param {number} cols 
 * @param {number} rows 
 * @returns a 2D array of the given dimensions filled with "-"
 */
function makeBoard(cols, rows) {
  const board = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

//#endregion Nested Loops and Arrays

// --------------------------
//#region Practice
// --------------------------

//#endregion Practice

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  multiplyNumbers,
  vote,
  concatenateStrings,
  sumArray,
  sumToN,
  factorial,
  buildNArray,
  findMax,
  findLongestString,
  countPresent,
  getDnaComplement,
  isSongInPlaylist,
  isAllEven,
  makeBoard,
  evenAndOdd,
  exponentiate,
  onlyOdds,
  bacteriaTime,
  getAverage,
  countCoins,
  getPairs,
};

