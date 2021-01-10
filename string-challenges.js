// /// STRING METHODS
// 1- Write a JavaScript function to check whether a string is blank or not.

function is_Blank(str) {
  return str.length === 0;
}

// 2- Write a JavaScript function to hide email addresses to protect from unauthorized user.

function protect_email(email) {
  var splitEmail = email.split("@");
  var name = splitEmail[0];
  var nameRange = name.length / 2;
  var name = name.substring(0, name.length - nameRange);
  var service = splitEmail[1];
  return name + "...@" + service;
}

console.log(protect_email("julielenaerts@gmail.com"));

// 3- Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insertString(firstStr, insertStr, place) {
  if (typeof place == "undefined") {
    place = 0;
  }
  if (typeof insertStr == "undefined") {
    insertStr = "";
  }
  return firstStr.slice(0, place) + insertStr + firstStr.slice(place);
}

console.log(insertString("We are doing some exercises."));
console.log(insertString("We are doing some exercises.", "Javascript "));
console.log(insertString("We are doing some exercises.", "Javascript ", 18));

// 4- Write a JavaScript function to chop a string into chunks of a given length.

function stringChop(str, chops) {
  var length = str.length;
  var numChops = length / chops;
  var strArray = [];
  for (i = 0; i < numChops; i++) {
    strArray.push(str.substr(i, chops));
    i = i + 2;
  }
  return strArray;
}
console.log(stringChop("w3resource", 3));

// WERKT NIET BIJ ANDERE WAARDEN DAN 3 :-(

// console.log(string_chop('w3resource'));  => ["w3resource"]
// console.log(string_chop('w3resource',2));  =>  ["w3", "re", "so", "ur", "ce"]
// console.log(string_chop('w3resource',3)); => ["w3r", "eso", "urc", "e"]

// 5- Write a JavaScript function to truncate a string to a certain length.

function truncateStr(str, length) {
  if (str.length > 0) {
    return str.slice(0, length);
  }
}

console.log(truncateStr("Hello There", 4));

// 6- Write a JavaScript function to test whether the character at the provided (character) index is lower case.

function isLowerCase(str, position) {
  if (str[position] !== " ") {
    var lowerCase = str[position].toLowerCase();
    var bool = (lowerCase === str[position]).valueOf();
    return bool;
  } else {
    return "This position is blank...";
  }
}

console.log(isLowerCase("Js STRING EXERCISES", 1));

// 7- Write a JavaScript function to test whether a string ends with a specified string.

function endsWith(str, word) {
  var strSplit = str.split(" ");
  var length = strSplit.length;
  if (strSplit[length - 1] === word) {
    return "true";
  } else {
    return "false";
  }
}

console.log(endsWith("JS string exercises", "exercises"));

// 8- Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.

function guid(length) {
  var uuid = [];
  var characters =
    "abcdefghijklmnropqstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (i = 0; i <= length; i++) {
    uuid.push(characters[Math.round(Math.random() * 32)]);
  }
  uuid = uuid.join("");
  return uuid;
}

console.log(guid(32));
