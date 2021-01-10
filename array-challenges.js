// 6. Write a function to remove all strings with less than X characters
// from an array of strings
console.log("************OEFENING 6: remove strings****************");
console.log("");

function lessThan(arr, length) {
  return arr.filter((str) => str.length > length);
}

console.log(lessThan(["hello", "elephant", "sleeping tight", "yes"], 7));
console.log("");

// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.

console.log("************OEFENING 7: Fibonacci****************");
console.log("");

function fibonacci(length) {
  var fib = [0, 1];
  for (var i = fib.length; i < length; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

console.log(fibonacci(10));
console.log("");

// 8. Write a JavaScript function that returns array elements larger than a number

console.log(
  "************OEFENING 8: array with numbers larger than...****************"
);
console.log("");

var numbers = [5, 2, 20, 60, 45];
var toCheck = 6;

var largerThan = numbers.filter(function (number) {
  return number > toCheck;
});

console.log(largerThan);
console.log("");

// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);

console.log("************OEFENING 9: generate random color****************");
console.log("");

function randomColor() {
  var rgb = [];
  for (i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  rgb = rgb.join();
  return "rgb(" + rgb + ")";
}

console.log(randomColor());
console.log("");

console.log("************OEFENING 10: find the type of angle****************");
console.log("");

function angle(degrees) {
  if (degrees > 0 && degrees < 90) {
    return "This is an acute angle.";
  } else if (degrees == 90) {
    return "This is a right angle.";
  } else if (degrees < 180 && degrees > 90) {
    return "This is an obtuse angle.";
  } else degrees == 180;
  return "This is a straight angle";
}
console.log(angle(45));
console.log(angle(90));
console.log(angle(125));
console.log(angle(180));
console.log("");

console.log("************OEFENING 11: remove dubbels****************");
console.log("");

function merge(arr1, arr2) {
  var arr3 = arr1.concat(arr2);
  var merge = [];
  merge.push(arr3[0]);
  for (i = 0; i < arr3.length; i++) {
    var exists = merge.indexOf(arr3[i]);
    if (exists === -1) {
      merge.push(arr3[i]);
    }
  }
  return merge;
}

var words1 = ["cat", "dog", "bird", "horse", "pig"];
var words2 = ["snake", "pelican", "horse", "dog", "pig"];

console.log(merge(words1, words2));
console.log("");

// FROM HERE NO FOR LOOPS ALLOWED

console.log("************OEFENING 12: to the 3rd power****************");
console.log("");

function thirdPower(numbers) {
  return numbers.map(function (nr) {
    return Math.pow(nr, 3);
  });
}

console.log(thirdPower([2, 1, 6, 4]));
console.log("");

console.log("************OEFENING 13: to the Nth power****************");
console.log("");

function nthPower(numbers, n) {
  return numbers.map(function (nr) {
    return Math.pow(nr, n);
  });
}

console.log(nthPower([2, 1, 6, 4], 16));
console.log("");

console.log("************OEFENING 14a: avg without for-loop****************");
console.log("");

function avg(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(avg([2, 1, 6, 4]));
console.log("");

console.log("************OEFENING 14b: sum without for-loop****************");
console.log("");

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(sum([2, 1, 6, 4]));
console.log("");

console.log(
  "************OEFENING 15: return names with a capital****************"
);
console.log("");

function removeNames(arr) {
  return arr.filter(
    (name) => name === name.charAt(0).toUpperCase() + name.slice(1)
  );
}

console.log(
  removeNames(["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"])
);
console.log("");

// NEXTLEVEL

// 16. Write a Javascript function to find how many times a certain number occurs in that array.

// console.log(
//   "************OEFENING 16: occurence in an array****************"
// );
// console.log("");

// function occurrence(arr) {
//   arr.reduce(function (occ, nr) {
//     occ[nr];
//   });
// }
// 17. Write a JavaScript program to find the most frequent item of an array.
