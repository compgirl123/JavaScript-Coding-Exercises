//  start of exercise
var airline1 = {
    "name": 'European Airline',
    "color": 'blue',
    "planes": 10,
    "destination": 'Europe'
}

var airline2 = {
   "name": 'Airline of the Americas',
    "color": 'red',
    "planes": 12,
    "destination": 'Americas'
}

var airline3 = {
   "name": 'African Airlines',
    "color": 'yellow',
    "planes": 8,
    "destination": 'Africa'
}

var airline4 = {
   "name": 'Asian Airlines',
    "color": 'green',
    "planes": 14,
    "destination": 'Asia'
}

var airlinesCombined = [airline1,airline2,airline3,airline4];

console.log(airlinesCombined);
// can the existing array be used for the same concatation purposes as an empty variable? Is it necessary to create a separate variable?
var combineAirlineVariables = {};

for( var i = 0; i < airlinesCombined.length; i++){
   'name', airlinesCombined[i]['name'];
   'color', airlinesCombined[i]['color'];
   'planes', airlinesCombined[i]['planes'];
   'destination', airlinesCombined[i]['destination'];
}

combineAirlineVariables += airlinesCombined;

console.log(combineAirlineVariables);

var ages = [12,13,14,15,16,17,18,19,20];

var age = '';

for( var i = 0; i < age.length; i++){
  function checkAge(age){
     return age >= 18;
  }
}

// end of exercise