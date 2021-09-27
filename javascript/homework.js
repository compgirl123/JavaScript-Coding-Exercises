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
    "starting_destination": 'Europe',
    "final_destination": 'Africa',
    "number_of_seats": 80,
    "cost_of_the_flight": 2000,
    "year_of_the_plane": 2016
}

var airline2 = {
   "name": 'Airline of the Americas',
    "color": 'red',
    "planes": 12,
    "starting_destination": 'America',
    "final_destination": 'Europe',
    "number_of_seats": 90,
    "cost_of_the_flight": 3000,
    "year_of_the_plane": 2021
}

var airline3 = {
   "name": 'African Airlines',
    "color": 'yellow',
    "planes": 8,
    "starting_destination": 'Africa',
    "final_destination": 'Asia',
    "number_of_seats": 90,
    "cost_of_the_flight": 1600,
    "year_of_the_plane": 2015
}

var airline4 = {
   "name": 'Asian Airlines',
    "color": 'green',
    "planes": 14,
    "starting_destination": 'Asia',
    "final_destination": 'Africa',
    "number_of_seats": 100,
    "cost_of_the_flight": 500,
    "year_of_the_plane": 2019
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

// creation of an array that will contain the cost of the flights
// var flight_costs = [];
// add code for cheap flight here
// for(var i = 0; i < airlinesCombined.length; i++){
//     // array airlinesCombined , I have this array, how can I access the price of each?
//     //console.log(airlinesCombined[i]['cost_of_the_flight']);
//     flight_costs.push(airlinesCombined[i]['cost_of_the_flight']);
//     // Next question we ask: What is the lowest value?
// }
// console.log(flight_costs); // all values of the flight costs are here stored as integer values

// // Finding the  minimum using the math object
// // It is built inside JavaScript

// // minimum of an array
// var minimum_cost = Math.min.apply(Math,flight_costs); // get minimum value of an array
// console.log(minimum_cost);

// // mimimum of two numbers
// var minimum_two_numbers = Math.min(444,66);
// console.log("Min two numbers",minimum_two_numbers);

// // Print out flight details of the cheapest flight

// for(var i = 0; i < airlinesCombined.length; i++){
//     if(airlinesCombined[i]['cost_of_the_flight'] == minimum_cost){
//         // When the price of the flight is equal to the minimum value of the flights, you print out the flight info
//         console.log("cheapest flight info: ",airlinesCombined[i]);
//     }
// }


// insert into html

function getStartDestination(){
    var getStart = document.getElementById("start_destination").value;
    //alert(getStart);
    //collapseOne -> id where we want to display the result, aka what is selected and what it returns
    document.getElementById("startDestination").innerHTML = getStart;// innerHTML means add a text based value of the result value.
   // alert(getStart);
   return getStart;
}

function getEndDestination(){
    var getEnd = document.getElementById("end_destination").value;
    document.getElementById('endDestination').innerHTML = getEnd;
    return getEnd;
}

function flightDescription(){
    //airlinesCombined // search this array for matching values of what was selected in the select box.
    var get_start_destination_selected = getStartDestination();
    var get_end_destination_selected = getEndDestination();
    for (var i = 0; i < airlinesCombined.length; i++){
       if(airlinesCombined[i].starting_destination == get_start_destination_selected && 
        airlinesCombined[i].final_destination == get_end_destination_selected)
        {
            console.log(airlinesCombined[i].color);
            document.getElementById("name").innerHTML= airlinesCombined[i].name;
            document.getElementById("color").innerHTML= airlinesCombined[i].color;
            document.getElementById("plane").innerHTML= airlinesCombined[i].planes;
            document.getElementById("number_of_seats").innerHTML= airlinesCombined[i].number_of_seats;
            document.getElementById("cost_of_the_flight").innerHTML= airlinesCombined[i].cost_of_the_flight;
            document.getElementById("year_of_the_plane").innerHTML= airlinesCombined[i].year_of_the_plane;
        }
    }
}

// "name": 'Asian Airlines',
// "color": 'green',
// "planes": 14,
// "starting_destination": 'Asia',
// "final_destination": 'Africa',
// "number_of_seats": 100,
// "cost_of_the_flight": 500,
// "year_of_the_plane": 2019

// JQuery
$(document).ready(function(){
    $('button').click(function(){
        getStartDestination();
        getEndDestination();
        // getResultingAirlines();
        flightDescription();
    })
})

function getResultingAirlines(){ /* WHY DOES THIS NEED TO BE A SEPARATE FUNCTION? */
    //airlinesCombined -> do a search on the airlinesCombined to get available flgihts
    var airlineDestination = [];
    var start_destination =  getStartDestination();
    var end_destination = getEndDestination();
    for(var i = 0; i < airlinesCombined.length; i++){
        if(airlinesCombined[i].starting_destination == start_destination && airlinesCombined[i].final_destination == end_destination){
            //alert("EQUAL " + start_destination + "EQual " + end_destination);
            // Show the flight information here
            document.getElementById("startDestination").innerHTML = airlinesCombined[i].name;//+airlinesCombined[i]
            //color+airlinesCombined[i].starting_destination+airlinesCombined[i].end_destination;
        }
        else{
            document.getElementById("startDestination").innerHTML = "No Flights Available";
        }
    }
}

// CHEAPESTFLIGHT

var pushAirlineCosts = [];

for(var i = 0; i < airlinesCombined.length; i++){
    pushAirlineCosts.push(airlinesCombined[i]['cost_of_the_flight']);
}

function getlowestCost(){
    var getMin = Math.min.apply(Math,pushAirlineCosts);
    console.log(getMin);
    for(var x = 0; x < airlinesCombined.length; x++){
        if(pushAirlineCosts[x] == getMin){
            document.getElementById("get_lowest_number").innerHTML= " the lowest number is" + pushAirlineCosts[x];
            document.body.style.backgroundColor = "green";
        }
    }
}