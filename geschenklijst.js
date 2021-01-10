const chalk = require("chalk");
const title = chalk.bold.red.underline;

/*******
HELPERS
*******/
const getID = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/************
CONSTRUCTORS
************/

function geschenkLijst(firstName, lastName, age) {
  this.fn = firstName;
  this.ln = lastName;
  this.age = age;
  this.giftList = [];
}

function geschenk(name, price) {
  const id = getID(0, 100);
  this.id = id;
  this.name = name;
  this.price = price;
}

/**********
PROTOTYPES
**********/

geschenkLijst.prototype.addGift = function (n, p) {
  this.giftList.push(new geschenk(n, p));
};

geschenkLijst.prototype.getList = function () {
  return this.giftList;
};

geschenkLijst.prototype.removeGift = function (id) {
  this.giftList.splice(
    this.giftList.findIndex((geschenk) => geschenk.id === id),
    1
  );
};

geschenkLijst.prototype.getTotalPrice = function () {
  return this.giftList.reduce(
    (acc, gift) => parseFloat((acc + gift["price"]).toFixed(2)),
    0
  );
};

/***********
MAKE EXAMPLE
***********/

const lijstJulie = new geschenkLijst("Julie", "Lenaerts", 33);

lijstJulie.addGift("Guitar", 355);
lijstJulie.addGift("Puehr tea", 25.15);
lijstJulie.addGift("Book", 24.99);
lijstJulie.addGift("Plant", 13);
lijstJulie.addGift("Book", 19.95);

/*****
TEST
*****/

console.log(title("Voorbeeld geschenklijst"));
console.log("");
console.log(lijstJulie);
console.log("");

console.log(title("Enkel de lijst met geschenken opvragen"));
console.log("");
console.log(lijstJulie.getList());
console.log("");

console.log(title("Totaalprijs geschenken"));
console.log("");
console.log(lijstJulie.getTotalPrice());
console.log("");
