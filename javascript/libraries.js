var cars = ['ford', 'dodge', 'mazda', 'honda', 'toyota'];

var text = "";

function cars1(item,index){
   text+= index +":" + item;
   console.log(index + "" + item);
}

console.log(cars.forEach(cars1));

var student1 = {
    "age": 22,
    "gender": "male",
    "GPA": 2.0,
    "subject": 'english'
 }
 
 var student2 = {
    "age": 26,
    "gender": "female",
    "GPA": 2.3,
    "subject": 'science'
 }
 
 var student3 = {
    "age": 21,
    "gender": "male",
    "GPA": 2.2,
    "subject": 'english'
 }
 
 var student4 = {
    "age": 24,
    "gender": "male",
    "GPA": 1.9,
    "subject": 'english'
 }
 
 var student5 = {
    "age": 25,
    "gender": "female",
    "GPA": 2.2,
    "subject": 'math'
 }
 
 var arr_students = [student1,student2,student3,student4,student5];
 var students_info = {};
 for (var i=0;i<5;i++){
    students_info[i] = {
       "age": arr_students[i]["age"],
       "gender": arr_students[i]["gender"],
       "GPA": arr_students[i]["GPA"],
       "subject": arr_students[i]["subject"],
    }
 }
 
 for (var i = 0; i<5; i++){
    if( students_info[i].subject == 'english'){
       console.log("the data",students_info[i]);
    }
 }
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
