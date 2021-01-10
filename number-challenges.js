// // Number challenges
// 1. Write a JavaScript function that returns a comma seperated list with generated
// Multiplication Table of a given number (max. 1000 iterations)

function generateMultiplicationTable(nr) {
  var maaltafelReeks = "";
  for (var i = 0; i < 1000; i++) {
    maaltafelReeks += i * nr + ", ";
  }
  return maaltafelReeks;
}

// console.log(generateMultiplicationTable(3));

// 2. extension of first challenge:

// Every time a value in the comma seperated list is divisible by 20 add an (asterisk)* to it

function generateMultiplicationTableWithAsterisk(nr) {
  var maaltafelReeks = "";
  for (var i = 0; i < 1000; i++) {
    var berekening = i * nr;
    maaltafelReeks += berekening;
    if (berekening % 20 === 0) {
      maaltafelReeks += "*, ";
    } else {
      maaltafelReeks += ", ";
    }
  }
  return maaltafelReeks;
}

// console.log(generateMultiplicationTableWithAsterisk(3));

// 3. Write a Javascript function to return wether a value is divisible by a certain number

function isDivisible(a, b) {
  return a % b === 0;
}

isDivisible(333, 7);

// => false

// 4. Write a Javascript function that return a comma seperated list with even numbers between a range

function getEvenNumbersInRange(a, b) {
  var range = "";
  for (var i = a; i <= b; i++) {
    if (i % 2 === 0) {
      range += i + ", ";
    }
  }
  return range;
}

console.log(getEvenNumbersInRange(56, 1211));

// 5. Write a Javascript function that calculate the distance between two coordinates. (coordinate1 = 20,100 en coordinate2 = 200,400)
// A² = B² + C²

function getDistance(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;
  var c = Math.sqrt(a * a + b * b);
  return c;
}

console.log("The distance is " + getDistance(20, 100, 200, 400));
