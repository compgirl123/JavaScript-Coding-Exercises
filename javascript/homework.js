//  start of exercise

// Make sure to add this to each airline dictionary:
// flight info (add starting_destination) and change destination to final_destination)
// number of seats
// year of the plane
// cost of the flight 

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

var airlinesCombined = [airline1,airline2,airline3,airline4]; // Array does concatination automatically

console.log(airlinesCombined);
// can the existing array be used for the same concatation purposes as an empty variable? Is it necessary to create a separate variable?
var combineAirlineVariables = {};

// Wants to print out information
// Fix this with console.log()
// use for loop when you have the condition where you want to find the least expensive airline.

// This for loop down below prints out everything with all the airlines combined.
for( var i = 0; i < airlinesCombined.length; i++){
   console.log('name', airlinesCombined[i]['name'],'color',airlinesCombined[i]['color'],'etc...(do the rest planes and destination'); // console logs every name of airlines
   // For sean: add the rest of the console logs
   // You can also make a big console log with everything
   'color', airlinesCombined[i]['color'];
   'planes', airlinesCombined[i]['planes'];
   'destination', airlinesCombined[i]['destination'];
}


// Practice done by Sean
var ages = [12,13,14,15,16,17,18,19,20];

var age = '';

for( var i = 0; i < age.length; i++){
  function checkAge(age){
     return age >= 18;
  }
}

// end of exercise