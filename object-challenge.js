/*******************
HELPERS
*******************/

const getRandomStr = () => Math.random().toString(36).substr(2);

const getRandomRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let getRandomRangeFloat = (min, max) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

const getRandomSport = () =>
  ["swimming", "cycling", "running"][getRandomRange(0, 2)];

// in km/h
const getRandomSpeed = (sport) => {
  switch (sport) {
    case "swimming":
      return getRandomRangeFloat(1.5, 2.5);
    case "cycling":
      return getRandomRangeFloat(20, 40);
    case "running":
      return getRandomRangeFloat(6, 10);
  }
};

// in min
const getRandomTime = (sport) => {
  switch (sport) {
    case "swimming":
      return getRandomRange(30, 120);
    case "cycling":
      return getRandomRange(60, 360);
    case "running":
      return getRandomRange(15, 180);
  }
};

//in km
const getRandomDistance = (sport, duration) => {
  switch (sport) {
    case "swimming":
      return floatNum((duration / 60) * getRandomSpeed("swimming"));
    case "cycling":
      return floatNum((duration / 60) * getRandomSpeed("cycling"));
    case "running":
      return floatNum((duration / 60) * getRandomSpeed("running"));
  }
};

// FORMATTING HELP

const floatNum = (num) => {
  return parseFloat(num.toFixed(2));
};

const kmPerHour = " km/h";

/*******************
CONSTRUCTORS
*******************/
function Log(sport, dist, time) {
  this.sport = sport;
  this.dist = dist;
  this.time = time;
}

function Sporter(fn, ln, age) {
  this.fn = fn;
  this.ln = ln;
  this.age = age;
  this.logList = [];
}

/************************
SPORTER OBJECT PROTOTYPES
*************************/

//PUSH NEW TRAINING LOG
Sporter.prototype.train = function (soortSport, dist, min) {
  this.logList.push(new Log(soortSport, dist, min));
};

//GET TOTAL MINUTES PRACTICED (GENERAL OR FOR A CERTAIN SPORT)
// Sporter.prototype.getTotalTime = function (sport) {
//   if (!sport) {
//     return this.logList.reduce((acc, logObj) => acc + logObj.time, 0);
//   } else {
//     return this.logList
//       .filter((logObj) => logObj.sport === sport)
//       .reduce((acc, logObj) => acc + logObj.time, 0);
//   }
// };

//GET TOTAL DISTANCE (GENERAL OR FOR SPECIFIC SPORT)
Sporter.prototype.getTotal = function (sport, prop = "dist") {
  return this.logList
    .filter((logObj) => (sport ? logObj.sport === sport : true))
    .reduce((acc, logObj) => acc + logObj[prop], 0);
};

//GET AVG SPEED OF SPORTER PER SPORT
Sporter.prototype.getAvg = function (sport) {
  return (
    floatNum(
      this.getTotal(sport, "dist") / (this.getTotal(sport, "time") / 60)
    ) || 0
  );
};

//GET LONGEST SINGLE DISTANCE OF CERTAIN SPORT
Sporter.prototype.longestDistance = function (sport) {
  return this.logList
    .filter((logObj) => logObj.sport === sport)
    .reduce(
      (logObj1, logObj2) =>
        logObj1.dist > logObj2.dist ? logObj1.dist : logObj2.dist,
      0
    );
};

/*******************
OBJECT ALL SPORTERS
*******************/

const allSporters = [];
let aantalsporters = 5000;

while (aantalsporters--) {
  const vn = "fn-" + getRandomStr();
  const an = "an-" + getRandomStr();
  const age = getRandomRange(16, 82);
  let aantalLogs = getRandomRange(200, 400);
  //AANMAAK SPORTER
  allSporters.push(new Sporter(vn, an, age));
  //AANMAAK RANDOM AANTAL LOGS VOOR LAATST AANGEMAAKTE SPORTER
  while (aantalLogs--) {
    const sport = getRandomSport();
    const time = getRandomTime(sport);
    const distance = getRandomDistance(sport, time);
    //AANMAAK RANDOM TRAINING LOG
    allSporters[allSporters.length - 1].train(sport, distance, time);
  }
}

// Je maakt 1 grote hoofdArray allSporters met 5000 Sporters
// elke sporter dat in die array wordt gepushed geef je tussen 200 en 400 trainingLogs

console.log("EXAMPLE SPORTER\n----------------------------");
console.log(allSporters[4]);
console.log("");

// 1) + sum of all sports kms => Calculate the total distance of all traininglogs of all people

const totalKm = allSporters.reduce(
  (acc, sporterObj) => acc + sporterObj.getTotal(),
  0
);

console.log("TOTAL DISTANCE IN ALL SPORTS\n----------------------------");
console.log(floatNum(totalKm) + " km");
console.log("");

// 2) + sum of all running km of all sporters => Calculate the total running distance of all traininglogs of all people

const totalKmRun = allSporters.reduce(
  (acc, sporter) => acc + sporter.getTotal("running", "dist"),
  0
);

console.log(
  "TOTAL RUNNING DISTANCE OF ALL SPORTERS\n---------------------------------------"
);
console.log(floatNum(totalKmRun) + " km of running");
console.log("");

// 3) + average running speed of all sporters  => Calculate avg-speed of all running of all people in all logs

const avgRunningSpeed =
  allSporters
    .filter((sporter) =>
      sporter.logList.filter((logObj) => logObj.sport === "running")
    )
    .reduce((acc, sporter) => acc + sporter.getAvg("running"), 0) /
  allSporters.length;

console.log(
  "AVERAGE RUNNING SPEED ALL SPORTERS\n-----------------------------------"
);
console.log(floatNum(avgRunningSpeed) + kmPerHour);
console.log("");

// 4) + person with the longest total swimming distance => search for the first-name, last-name and age of the guy/girl that did the longest total swimdistance

const longestSwimTotal = allSporters
  .sort((sporter1, sporter2) => {
    return (
      sporter1.getTotal("swimming", "dist") -
      sporter2.getTotal("swimming", "dist")
    );
  })
  .pop();

console.log(
  "NAME AND AGE OF SPORTER WITH LONGEST TOTAL SWIMMING DISTANCE\n-------------------------------------------------------------"
);
console.log(
  `Firstname: ${longestSwimTotal.fn}\n 
  Lastname: ${longestSwimTotal.ln}\n 
  Age: ${longestSwimTotal.age}\n 
  Total swimming distance: ${floatNum(
    longestSwimTotal.getTotal("swimming", "dist")
  )} km`
);
console.log("");

// 5) + person with the longest swim distance log => find the guy/girl with the biggest single distance swimtraining

const bestSwimmer = allSporters.sort(
  (sporter1, sporter2) =>
    sporter2.longestDistance("swimming") - sporter1.longestDistance("swimming")
)[0];

console.log(
  "NAME, AGE AND LONGEST DISTANCE OF SWIMMER\n-------------------------------------------------------------"
);
console.log(
  `Firstname: ${bestSwimmer.fn}\n 
  Lastname: ${bestSwimmer.ln}\n 
  Longest single swim distance: ${bestSwimmer.longestDistance("swimming")} km`
);
console.log("");

// 6) - fastest average cycler => Find the guy that is the fastest cycler returning his/her name and his/her avg km/h

const fastestCycler = allSporters.sort((sporter1, sporter2) => {
  return sporter2.getAvg("cycling") - sporter1.getAvg("cycling");
})[0];

console.log(
  "NAME AND AVERAGE SPEED OF FASTEST CYCLIST\n-------------------------------------------------------------"
);
console.log(
  `Firstname: ${fastestCycler.fn}\n 
  Lastname: ${fastestCycler.ln}\n 
  Avg Speed: ${fastestCycler.getAvg("cycling")}${kmPerHour}`
);
console.log("");
