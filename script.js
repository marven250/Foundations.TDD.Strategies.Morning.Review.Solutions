// --------------------------
//#region Guard
// --------------------------

function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error";
  }

  return a * b;
}

//#endregion Guard

// --------------------------
//#region Accumulator Variable
// --------------------------

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
  // vote,
  // concatenateStrings,
  sumArray,
  // sumToN,
  // factorial,
  // buildNArray,
  findMax,
  // findLongestString,
  // countPresent,
  // getDnaComplement,
  isSongInPlaylist,
  // isAllEven,
  makeBoard,
  // evenAndOdd,
  // exponentiate,
  // onlyOdds,
  // bacteriaTime,
  // getAverage,
  // countCoins,
  // pairs,
};
