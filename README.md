# Foundations.TDD.Strategies

In this TDD set, you'll learn some problem solving strategies that you'll be using for the rest of your programming career!

## Getting Started

1. Clone this repo.
2. Navigate your terminal to your local repo folder.
3. In your terminal, run `npm install`.
4. In your terminal, run `npm test`.
5. Edit `script.js` until you are passing all test cases!
6. _(Optional)_ You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to only run the tests for the problem you're working on.
7. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Strategies and Prompts

The rest of these instructions is categorized into some common strategies used not only to tackle TDD problems, but also to write code in general! While this list is certainly not exhaustive, you'll find that these techniques are used again and again no matter where you go.

An example solution is provided in `script.js` for the first prompt of each strategy. Use that code as a reference as you complete the rest of the prompts!

**Do them in order!**

## Guard

A **guard** is a conditional usually placed at the beginning of a function that prevents the rest of the function from being run if certain conditions are not met. These are used often to help avoid errors. A function can have more than one guard.

### multiplyNumber

`multiplyNumber(a: any, b: number)` returns the product of `a` and `b` _unless_ `a` is not a number, in which case the string `"error"` is returned.

```js
multiplyNumber(3, 6); // >>> 18
multiplyNumber("not a number", 6); // >>> "error"
```

### vote

`vote(age: number)` returns `"Who would you like to vote for?"` if the given `age` is at least 18; otherwise it returns `"You must be 18 or older to vote."`

```js
vote(49); // >>> "Who would you like to vote for?"
vote(12); // >>> "You must be 18 or older to vote."
```

### concatenateStrings

`concatenateStrings(a: any, b: any)` returns the two given strings concatenated together unless either `a` _or_ `b` is not a string, in which case the string `"error"` is returned.

```js
concatenateStrings("hello", "world"); // >>> "helloworld"
concatenateStrings("hello", 15); // >>> "error"
```

## Accumulator Variable

An **accumulator variable** is used to keep track of information as a program executes, usually in the context of a loop.

### sumArray

`sumArray(number[])` returns the sum of the given array. The sum of an empty array is 0. You can assume that only arrays of numbers will be passed in.

```js
sumArray([]); // >>> 0
sumArray([1]); // >>> 1
sumArray([1, 1]); // >>> 2
sumArray([10, 9, 28, 173, -23]); // >>> 197
```

### sumToN

`sumToN(n: number)` returns the sum of all integers from 1 to `n`. If `n` is 0 or negative, then `0` is returned. You can assume that `n` is an integer.

```js
sumToN(-2); // >>> 0
sumToN(8); // >>> 36
sumToN(23); // >>> 276
```

### factorial

`factorial(n: number)` returns the product of all integers from 1 to `n`. If `n` is 0 or negative, then `1` is returned. If `n` is not an integer, then the string `"error"` is returned.

```js
factorial(-1919): // >>> 1
factorial("10"); // >>> "error"
factorial(8); // >>> 40320
```

The accumulator doesn't have to be a number! You can build arrays or strings as well.

### buildNArray

`buildNArray(n: number)` returns an array of all integers from 1 to `n`. If `n` is 0 or negative, then an empty array is returned. If `n` is not an integer, then the string `"error"` is returned.

```js
buildNArray(-555); // >>> []
buildNArray(2.38); // >>> "error"
buildNArray(3); // [1, 2, 3]
```

## Conditional Accumulation

We've seen conditional statements used as guard clauses, but they can also go inside a loop! We don't always want to update an accumulator variable.

### findMax

`findMax(number[])` returns the greatest number in a given array of numbers. If the array is empty, then `-Infinity` is returned.

```js
findMax([]); // >>> -Infinity
findMax([-10, 234, 568, 29, 7]); // >>> 568
findMax([3, 3, 3]); // >>> 3
```

### findLongestString

`findLongestString(string[])` returns the longest string in a given array of strings. If the array is empty, then an empty string is returned.

```js
findLongestString([]); // >>> ""
findLongestString(["a", "bc", "def", "gh"]); // >>> "def"
```

### countPresent

`countPresent(attendance: boolean[])` receives an array of booleans that represent whether or not students in a class are present (`true` = present), and returns the number of students that are present.

```js
countPresent([]); // >>> 0
countPresent([true, true, false, false, true]); // >>> 3
```

### getDnaComplement

In DNA strings, the symbols `A` and `T` are complements of each other, and `C` and `G` are complements. `getDnaComplement(dna: string)` receives one side of the DNA strand and returns the complementary string.

```js
getDnaComplement(""); // >>> ""
getDnaComplement("ATAT"); // >>> "TATA"
getDnaComplement("GTCA"); // >>> "CAGT";
```

## Return Timing

Almost all of the functions we've seen so far return something at the very end. Sometimes we get the answer we want before we finish iterating. For these next problems, think about _what_ to return and _when_ to return!

### isSongInPlaylist

`isSongInPlaylist(song: string, playlist: string[])` returns whether the given song can be found in the given playlist. You can assume that the song will be nonempty.

```js
isSongInPlaylist("Chasing Pavements", [
  "Just Smile",
  "Burn Options",
  "Chasing Pavements",
  "Industrial Now",
]); // >>> true
isSongInPlaylist("24K Power", [
  "Stubborn Love",
  "Electric Heart",
  "All I Want",
]); // >>> false
```

### isAllEven

`isAllEven(number[])` returns whether or not the given array of integers is all even. You can assume that the array will be nonempty.

```js
isAllEven([2, 4, 6, 8, 10]); // >>> true
isAllEven([2, 4, 9, 6, 8]); // >>> false
```

## Nested Loops and Arrays

You can loop inside a loop, and you can have arrays of arrays! This is actually super common, so make sure you understand the solution code for the following prompt.

### makeBoard

`makeBoard` takes two arguments:

- `cols`: number - how many columns the board will have
- `rows`: number - how many rows the board will have

`makeBoard` will return a 2D array filled with `"-"` according to the given dimensions.

```js
makeBoard(3, 4);
/* >>>
[
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
]
*/
```

### evenAndOdd

`evenAndOdd(number[])` takes an array of numbers and returns a new array that contains two smaller arrays. The first element in the returned array should be an array with all of the even numbers from the original array. The second element in the returned array should be an array with all of the odd numbers from the original array.

```js
evenAndOdd([1, 2, 3, 4, 5, 6]); // >>> [[ 2, 4, 6 ], [ 1, 3, 5 ]]
evenAndOdd([10, 8, 6, 4, 2]); // >>> [[10, 8, 6, 4, 2], []]
```

## Practice

Use a combination of the techniques you've learned to solve the following practice problems!

### exponentiate

`exponentiate(b: number, p: number)` returns `b` raised to the `p`th power. Do not use the exponent operator (`**`).

```js
exponentiate(2, 3); // >>> 8
```

### onlyOdds

`onlyOdds(number)` returns the sum of all odd numbers between 1 and the given number.
If it receives an argument less than 1, it should return 0.

```js
onlyOdds(11); // >>> 36
```

### bacteriaTime

`bacteriaTime(current: number, target: number)` returns the number of minutes required for the number of bacteria to grow from `current` to a number >= `target`. The number of bacteria doubles every 20 minutes, and you can assume that `current` will be a positive integer. If `target` is smaller than `current`, return the string `"target must be larger than current"`.

```js
bacteriaTime(10, 120); // >>> 80
```

### getAverage

`getAverage(number[])` returns the average (mean) of all the numbers in the given array.

```js
getAverage([10, 23, 18, -5, 28, 10]); // >>> 14
```

### countCoins

`countCoins(coins: string[])` takes an array of strings that represent coins. Return the total value in cents of the array.

- P = 1 cent, N = 5 cents, D = 10 cents, Q = 25 cents

```js
countCoins(["Q", "Q", "D", "N", "N", "P", "Q"]); // >>> 96
```

### pairs

`pairs(number)` returns an array of all possible pairs of integers between 1 and the given number. If the given number is not a positive integer, then the string `"error"` is returned.

```js
pairs("pair"); // >>> "error"
pairs(4); // >>> [[ 1, 1 ], [ 1, 2 ],  [ 1, 3 ], [ 1, 4 ],  [ 2, 2 ], [ 2, 3 ],  [ 2, 4 ], [ 3, 3 ],  [ 3, 4 ], [ 4, 4 ]]
```
