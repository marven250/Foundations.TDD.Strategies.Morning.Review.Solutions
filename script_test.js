// --------------------------
//#region Setup
// You can safely ignore the code in this region :)
// --------------------------
// This line of code uses Chai, which is our assertion library.
const { expect } = require("chai");

// This imports your code so we can test it!
const code = require("./script.js");

// Helpers to generate random arrays for test cases
// Don't worry about how this works for now :)
function generateRandomInteger(low = -50, high = 50) {
  return low + Math.floor(Math.random() * (high - low + 1));
}
function generateRandomNumberArray(low = -50, high = 50, n = 5) {
  return Array.from({ length: n }, () => generateRandomInteger(low, high));
}
//#endregion Setup

describe("multiplyNumbers", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.multiplyNumbers).to.be.a("function");
    });

    it("returns a number", function () {
      expect(code.multiplyNumbers(1, 1)).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it('returns "error" if either argument is not a number', function () {
      expect(code.multiplyNumbers("1", "1")).to.equal("error");
      expect(code.multiplyNumbers(1, "1")).to.equal("error");
      expect(code.multiplyNumbers("1", 1)).to.equal("error");
    });

    describe("returns the correct product for random numbers between -50 and 50", function () {
      // Generate and test 3 random pairs of numbers
      for (let i = 0; i < 3; i++) {
        const x = generateRandomInteger(-50, 50);
        const y = generateRandomInteger(-50, 50);
        const expected = x * y;
        it(`correctly calculates ${x}*${y}=${expected}`, function () {
          const result = code.multiplyNumbers(x, y);
          expect(result).to.equal(expected);
        });
      }
    });
  });
});

describe("vote", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.vote).to.be.a("function");
    });

    it("returns a string", function () {
      expect(code.vote(5)).to.be.a("string");
    });
  });
  describe("returns the correct output", function () {
    it("returns the correct string when age is at least 18", function () {
      expect(code.vote(18)).to.equal("Who would you like to vote for?");
    });

    it("returns the correct string when age is under 18", function () {
      expect(code.vote(17)).to.equal("You must be 18 or older to vote.");
    });
  });
});

describe("concatenateStrings", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.concatenateStrings).to.be.a("function");
    });

    it("returns a string", function () {
      expect(code.concatenateStrings("a", "b")).to.be.a("string");
    });
  });

  describe("returns the correct output", function () {
    it('returns "error" when either argument is not a string', function () {
      expect(code.concatenateStrings(1, "1")).to.equal("error");
      expect(code.concatenateStrings(1, 1)).to.equal("error");
      expect(code.concatenateStrings("1", 1)).to.equal("error");
    });

    // Generate and test 3 random pairs of strings
    for (let i = 0; i < 3; i++) {
      const left = String(Math.random() * 9999);
      const right = String(Math.random() * 9999);
      const expected = left + right;
      it(`returns ${left}+${right}=${expected}`, function () {
        expect(code.concatenateStrings(left, right)).to.equal(expected);
      });
    }
  });
});

describe("sumArray", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.sumArray).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.sumArray([2]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns 0 for an empty array", function () {
      expect(code.sumArray([])).to.equal(0);
    });

    // Generate and test 3 arrays of 5 random numbers between -50 and 50
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray();

      // Don't worry about this next line for now :)
      const expected = test.reduce((a, b) => a + b);

      it(`returns ${expected} for ${test}`, function () {
        expect(code.sumArray(test)).to.equal(expected);
      });
    }
  });
});

describe("sumToN", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.sumToN).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.sumToN(10);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns 0 for nonpositive arguments", function () {
      expect(code.sumToN(0)).to.equal(0);
      expect(code.sumToN(-10)).to.equal(0);
    });

    // Generate and test 3 random numbers [1,50]
    for (let i = 0; i < 3; i++) {
      const test = generateRandomInteger(1, 50);
      const expected = (test * (test + 1)) / 2;

      it(`returns ${expected} as the sum of all integers from 1 to ${test}`, function () {
        expect(code.sumToN(test)).to.equal(expected);
      });
    }
  });
});

describe("factorial", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.factorial).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.factorial(3);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it('returns "error" if the argument is negative or not an integer', function () {
      expect(code.factorial(1.3)).to.equal("error");
      expect(code.factorial("10")).to.equal("error");
      expect(code.factorial(-20)).to.equal(1);
    });
    it("returns the correct answer for n in [0,8]", function () {
      const expected = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
      for (let n = 0; n <= 8; n++) {
        expect(code.factorial(n)).to.equal(expected[n]);
      }
    });
  });
});

describe("buildNArray", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.buildNArray).to.be.a("function");
    });
    it("returns an array of numbers", function () {
      const result = code.buildNArray(5);
      expect(result).to.be.an("array");
      expect(result).to.have.lengthOf(5);
      for (const number of result) {
        expect(number).to.be.a("number");
      }
    });
  });
  describe("returns the correct output", function () {
    it('returns "error" if the argument is not an integer', function () {
      expect(code.buildNArray(3.6)).to.equal("error");
      expect(code.buildNArray("200")).to.equal("error");
    });
    it("returns an empty array for nonpositive arguments", function () {
      expect(code.buildNArray(0)).to.eql([]);
      expect(code.buildNArray(-82)).to.eql([]);
    });

    // Generate and test 3 random numbers in [1,10]
    for (let i = 0; i < 3; i++) {
      const test = generateRandomInteger(1, 10);

      // Don't worry about this next line for now :)
      const expected = Array.from({ length: test }, (_, i) => i + 1);

      it(`returns ${expected} for ${test}`, function () {
        expect(code.buildNArray(test)).to.eql(expected);
      });
    }
  });
});

describe("findMax", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.findMax).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.findMax([1, 2]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns -Infinity for an empty array", function () {
      expect(code.findMax([])).to.equal(-Infinity);
    });

    // Generate and test 3 random arrays
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray();

      // Don't worry about this next line for now :)
      const expected = test.reduce((a, b) => (b > a ? b : a));

      it(`returns ${expected} for ${test}`, function () {
        expect(code.findMax(test)).to.equal(expected);
      });
    }
  });
});

describe("findLongestString", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.findLongestString).to.be.a("function");
    });
    it("returns a string", function () {
      const result = code.findLongestString(["a"]);
      expect(result).to.be.a("string");
    });
  });
  describe("returns the correct output", function () {
    it("returns an empty string for an empty array", function () {
      expect(code.findLongestString([])).to.equal("");
    });

    // Generate and test 3 random arrays
    for (let i = 0; i < 3; i++) {
      // Don't worry about this test generation for now :)
      const test = generateRandomNumberArray(1, 10).map((n) => "=".repeat(n));
      const expected = test.reduce((a, b) => (b.length > a.length ? b : a));

      it(`returns ${expected} for ${test}`, function () {
        expect(code.findLongestString(test)).to.equal(expected);
      });
    }
  });
});

describe("countPresent", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.countPresent).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.countPresent([true, false, true]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns 0 for an empty array", function () {
      expect(code.countPresent([])).to.equal(0);
    });

    // Generate and test 3 random arrays
    for (let i = 0; i < 3; i++) {
      // Don't worry about this test generation for now :)
      const test = generateRandomNumberArray().map((n) => n > 0);
      const expected = test.reduce((a, b) => (b ? a + 1 : a), 0);

      it(`returns ${expected} for ${test}`, function () {
        expect(code.countPresent(test)).to.equal(expected);
      });
    }
  });
});

describe("getDnaComplement", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getDnaComplement).to.be.a("function");
    });
    it("returns a string", function () {
      const result = code.getDnaComplement("ATCG");
      expect(result).to.be.a("string");
    });
  });
  describe("returns the correct output", function () {
    it("returns an empty string when given an empty string", function () {
      expect(code.getDnaComplement("")).to.equal("");
    });

    it("returns the correct DNA complement of the argument", function () {
      expect(code.getDnaComplement("ATCG")).to.equal("TAGC");
    });
  });
});

describe("isSongInPlaylist", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.isSongInPlaylist).to.be.a("function");
    });
    it("returns a boolean", function () {
      const result = code.isSongInPlaylist("a", ["a", "b"]);
      expect(result).to.be.a("boolean");
    });
  });
  describe("returns the correct output", function () {
    it("returns false when the playlist is empty", function () {
      expect(code.isSongInPlaylist("a", [])).to.equal(false);
    });
    it("returns false when the given song is not in the playlist", function () {
      expect(code.isSongInPlaylist("a", ["b", "c"])).to.equal(false);
    });

    // Generate and test 3 random playlists
    for (let i = 0; i < 3; i++) {
      // Don't worry about this test generation for now :)
      const test = generateRandomNumberArray(1, 9999).map((n) => String(n));
      const target = test[Math.floor(Math.random() * test.length)];

      it(`returns true when checking if ${target} is in ${test}`, function () {
        expect(code.isSongInPlaylist(target, test)).to.equal(true);
      });
    }
  });
});

describe("isAllEven", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.isAllEven).to.be.a("function");
    });
    it("returns a boolean", function () {
      const result = code.isAllEven([1, 2, 3, 4, 5]);
      expect(result).to.be.a("boolean");
    });
  });
  describe("returns the correct output", function () {
    it("returns false when not all numbers are even", function () {
      expect(code.isAllEven([1, 2, 2, 3, 5, 7, 6])).to.equal(false);
    });

    it("returns true when all numbers are even", function () {
      expect(code.isAllEven([2, 16, 12, 4, 82])).to.equal(true);
    });
  });
});

describe("makeBoard", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.makeBoard).to.be.a("function");
    });
    it("returns an array", function () {
      const result = code.makeBoard(3, 4);
      expect(result).to.be.an("array");
    });
  });
  describe("returns the correct output", function () {
    // Generate and test 3 random boards with size [1,5]
    for (let i = 0; i < 3; i++) {
      // Don't worry about this test generation for now :)
      const cols = generateRandomInteger(1, 5);
      const rows = generateRandomInteger(1, 5);
      const expected = Array.from({ length: rows }, () =>
        Array(cols).fill("-")
      );

      it(`returns the correct board of size ${cols}x${rows}`, function () {
        const result = code.makeBoard(cols, rows);
        expect(result).to.eql(expected);
      });
    }
  });
});

describe("evenAndOdd", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.evenAndOdd).to.be.a("function");
    });
    it("returns an array of length 2", function () {
      const result = code.evenAndOdd([1, 2, 3, 4, 5]);
      expect(result).to.be.an("array");
      expect(result).to.have.lengthOf(2);
    });
  });
  describe("returns the correct output", function () {
    // Generate and test 3 random arrays
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray(1);
      // Don't worry about this next line for now :)
      const expected = [
        test.filter((n) => n % 2 === 0),
        test.filter((n) => n % 2 === 1),
      ];

      it(`returns ${expected} for ${test}`, function () {
        expect(code.evenAndOdd(test)).to.eql(expected);
      });
    }
  });
});

describe("exponentiate", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.exponentiate).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.exponentiate(2, 3);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it('returns "error" if either argument is not an integer', function () {
      expect(code.exponentiate(5.3, 2)).to.equal("error");
      expect(code.exponentiate(5, 2.3)).to.equal("error");
      expect(code.exponentiate(5, 3.9)).to.equal("error");
      expect(code.exponentiate("5", 2)).to.equal("error");
      expect(code.exponentiate(5, "2")).to.equal("error");
      expect(code.exponentiate("5", "2")).to.equal("error");
    });

    // Generate and test 3 random pairs of numbers
    for (let i = 0; i < 3; i++) {
      const b = generateRandomInteger(1, 5);
      const p = generateRandomInteger(1, 5);
      const expected = b ** p;

      it(`returns ${b}^${p}=${expected}`, function () {
        expect(code.exponentiate(b, p)).to.equal(expected);
      });
    }
  });
});

describe("onlyOdds", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.onlyOdds).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.onlyOdds(10);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns 0 for arguments less than 1", function () {
      expect(code.onlyOdds(0)).to.equal(0);
      expect(code.onlyOdds(-382)).to.equal(0);
    });

    // Generate and test 3 random numbers
    for (let i = 0; i < 3; i++) {
      const n = generateRandomInteger(1, 100);
      const expected = Math.ceil(n / 2) ** 2;

      it(`returns ${expected} as the sum of all odd numbers from 1 to ${n}`, function () {
        expect(code.onlyOdds(n)).to.equal(expected);
      });
    }
  });
});

describe("bacteriaTime", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.bacteriaTime).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.bacteriaTime(10, 120);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it('returns "target must be larger than current" if target is smaller than current', function () {
      expect(code.bacteriaTime(10, 5)).to.equal(
        "target must be larger than current"
      );
    });

    // Generate and test 3 random pairs of numbers
    for (let i = 0; i < 3; i++) {
      const current = generateRandomInteger(10, 20);
      const target = generateRandomInteger(500, 5000);
      const expected = Math.ceil(Math.log2(target / current)) * 20;
      it(`returns ${expected} minutes for ${current} to double to ${target}`, function () {
        expect(code.bacteriaTime(current, target)).to.equal(expected);
      });
    }
  });
});

describe("getAverage", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getAverage).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.getAverage([1, 2, 3]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns null for an empty array", function () {
      expect(code.getAverage([])).to.be.null;
    });

    // Generate and test 3 random arrays
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray();
      const expected = test.reduce((a, b) => a + b) / test.length;
      it(`returns ${expected} as the average of ${test}`, function () {
        expect(code.getAverage(test)).to.equal(expected);
      });
    }
  });
});

describe("countCoins", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.countCoins).to.be.a("function");
    });
    it("returns a number", function () {
      const result = code.countCoins(["P", "N", "D", "Q"]);
      expect(result).to.be.a("number");
    });
  });
  describe("returns the correct output", function () {
    it("returns 0 for an empty array", function () {
      expect(code.countCoins([])).to.equal(0);
    });

    it(`returns 96 for ${["Q", "Q", "D", "N", "N", "P", "Q"]}`, function () {
      expect(code.countCoins(["Q", "Q", "D", "N", "N", "P", "Q"])).to.equal(96);
    });
  });
});

describe("getPairs", function () {
  describe("works with correct types", function () {
    it("is a function", function () {
      expect(code.getPairs).to.be.a("function");
    });
    it("returns an array", function () {
      const result = code.getPairs(4);
      expect(result).to.be.an("array");
    });
  });
  describe("returns the correct output", function () {
    it('returns "error" if the argument is not a positive integer', function () {
      expect(code.getPairs(-20)).to.equal("error");
      expect(code.getPairs(0)).to.equal("error");
      expect(code.getPairs(2.9)).to.equal("error");
      expect(code.getPairs("pair")).to.equal("error");
    });

    it(`returns the correct pairs for 4`, function () {
      const expected = [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 3],
        [3, 4],
        [4, 4],
      ];

      expect(code.getPairs(4)).to.eql(expected);
    });
  });
});
