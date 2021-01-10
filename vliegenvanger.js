//   return [1, 2, 3, 4].map((el) => el * 2);
// };

// CHALLENGE 3:
// Schrijf een Object function constructor vliegenVanger
// elke vliegenVanger heeft een naam en een leeftijd en een lijst met gevangen vliegen
// elke vliegenVanger moet de mogelijkheid hebben om een vlieg te vangen. De vlieg die hij vangt
// heeft een naam met het volgende patroon "vlieg-001"

// uitbreiding:

// zorg ervoor dat je kan opvragen hoeveel doden hij op zijn geweten heeft
// Breid de code uit zodat elke gevangen vlieg ook de mogelijk heeft om te ontsnappen.
// De kans dat hij ontsnapt is 1/3
// Maar!!! de vliegen moeten wel mee gelogd worden. Ze krijgen dus naast hun naam ook of ze ontsnapt zijn of niet

// Voeg tevens een functie toe zodat je zijn accuraatheid/doeltreffendheid kan opvragen in %

function vliegenVanger(nm, ag) {
  this.name = nm;
  this.age = ag;
  this.catchList = [];
}
// TOEVOEGEN VAN GEVANGEN VLIEGEN
vliegenVanger.prototype.catchFly = function () {
  this.catchList.push(new Vlieg(`vlieg-00${this.catchList.length + 1}`));
};
// WEERGAVE VAN AANTAL GEVANGEN VLIEGEN
vliegenVanger.prototype.getKillCount = function () {
  return (this.killCount = this.catchList.filter((el) => !el.escaped).length);
};
// WEERGAVE VAN GEDODE VLIEGEN
vliegenVanger.prototype.getAllCount = function () {
  return (this.AllCount = this.catchList.length);
};
// ACCURACY VAN VLIEGENVANGER
vliegenVanger.prototype.accuracy = function () {
  return (this.accuracy = this.getKillCount() / this.getAllCount());
};

function Vlieg(nm) {
  this.name = nm;
  this.escaped = Math.random() < 0.3;
}

const catcher1 = new vliegenVanger("David", 39);
const catcher2 = new vliegenVanger("Lars", 25);

catcher2.catchFly();
catcher2.catchFly();
catcher2.catchFly();
catcher2.catchFly();
catcher2.catchFly();
catcher2.catchFly();

console.log(catcher2);
