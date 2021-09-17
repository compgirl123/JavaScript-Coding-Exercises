// //document.write("Main Js Code");
// var annoying_popup = ['john', 'megan', 'mary', 'james'];

// // Loops in JavaScript
// // For loop -> You can run the code the number of times you specifcy
// // While loop -> You run the code until a condition is met.

// for(var x=0; x<annoying_popup.length; x++){
//   // console.log(annoying_popup[x]=='john');

//    if(annoying_popup[x]=='john'){
//    		//alert('john is gifted in math');
//    }
// }

// // Reverse for loop
// // start from the end of the array and go back to the start
// for(var i = annoying_popup.length-1;i>=0;i--){
// 	console.log(annoying_popup[i]);
// }

// for(var a = 0; a < annoying_popup.length; a++){
//    //console.log(annoying_popup[a]=='megan');
//    if(annoying_popup[a]=='megan'){
//      console.log(annoying_popup[a] + " " + 400*400);
//    }
// }

// var o = 0
// var number_array = [1,7,18,90,56];

// while(o<50){
//    console.log(o);
//    o+=5;
// }

// let p = 0;
// do{
//    // write your code here
//    if (number_array[p] == 7){
//       console.log (" 7 is a lucky number");
//    }
//    console.log(number_array[p]);
//    p++;

// }

// while (p < number_array.length)// a certain condition);

// // Comparison of While and for loops
// // Use the number array to go through with it and work with that
// var u = 0;
// var w = 0;
// var number_text = "";
// var number_text_2 = "";

// for (;number_array[u];)
// {
//    number_text += number_array[u];
//    u++;
// }
// console.log("text1 " + number_text);

// while(number_array[w]){
//    number_text_2 += number_array[w];
//    w++;
// }
// console.log("text2 "+ number_text);

// // Session #3 Problem

// var number_array = [1,7,18,90,56];
// var number_sum = 0;

// // for(var i = 0; i < number_array.length; i++){
// //    number_sum += number_array[i];
// // }

// for(var i = 0; i < number_array.length; i++){
//    number_sum += number_array[i];
// }
// console.log(number_sum);

// for(var i = number_array.length-1; i >= 0; i--){
//    number_sum += number_array[i];
// }

// console.log(number_sum);

// var animals = ['wolf', 'bear', 'deer', 'eagle'];

// var dash = "-";

// var stringCombination = "";

// for( var i = 0; i < animals.length; i+=1){
//    var a = animals[i] + dash;
//    stringCombination += a;
// }

// console.log(stringCombination); 

// var cars = ['ford', 'honda', 'toyota', 'mazda', 'dodge'];
// var concatenation = "";

// var i = 0;

// for(; i < cars.length; i++){
//    var stars = "**";
//    var space = " ";
//    var answer = cars[i] + space + stars;
//    console.log(answer);
//    concatenation += answer;
// }

// console.log(concatenation);

// for(var j = cars.length-1 ; j >= 0; j--){
//    var stars = "***"
//    var space = " ";
//    var answer = cars[j] + stars + space;
//    console.log(answer);
//    concatenation += answer;
// }

// console.log(concatenation);

// var start = 0;

// var answer = "";

// while(start <= cars.length-1){
//    var slashes = "//";
//    var space = " ";
//    answer = cars[start] + slashes + space;
//    concatenation += answer;
//    start+= 1;
// }

// var start = 0;

// do{
//    var slashes = "//";
//    var space = " ";
//    answer = cars[start] + slashes + space;
//    console.log(answer);
//    concatenation += answer;
//    start+= 1;
// }

// while(start <= cars.length-1);

// console.log(concatenation);

// // Switch Statements:
// // These are a special form of if statement where you can define different options
// // and also have a default case (like an else case)

// var dayOfWeekInt = new Date().getDay(); // returns an integer with the day of week as an integer
// switch(dayOfWeekInt){
//    case 0: // if day is Sunday
//       // code
//       console.log("Hiking Day today");
//       break;
//    case 6: // if day is Saturday
//       // code
//       console.log("relaxation day todayreeeee3");
//       break;
//    case 5:
//       // code
//       console.log("TGIF!");
//       break;
//    /*default:
//       console.log("Today is a day");
//       // this is like an else statement */
// }

// // new practice

//  var cars = ['ford', 'mazda', 'honda', 'toyota', 'dodge'];

//  var concatate = "";

//  for(var c = 0; c < cars.length; c++){
//     var spaceSeparation = " ";

//     var addTogether = cars[c] + spaceSeparation;

//     concatate += addTogether;
//  }

//  console.log(concatate);

//  new loop

var seasons = ['spring', 'summer', 'fall', 'winter'];
var combineConditions = "";

for(s = 0; s < seasons.length; s++){
   var spaceinBetween = " ";
   var slash = "/"
   combineParameters = seasons[s] + slash + spaceinBetween;
   // why dont i have to add the [s] key here, for the incrementation purposes, in order to get all the values?
}
combineConditions += combineParameters;
// need reminder for differnce between += and =+

console.log(combineConditions);

//More Examples of For loops

var nums1 = [1,2,3,4];

var nums2 = [];

for (var j=0; j < 2; j++){
   for( var i = 0; i < nums1.length; i++){
      nums2.push(nums1[i]);
   }
}

//array.push(what you want to push)

console.log("Second array",nums2);
console.log(nums1); // checking equality of two arrays

var runningSum = [];

var sum = 0;

for( var i = 0; i < nums1.length; i++){
   sum += nums1[i];
   //console.log("total sum each time",sum);
   runningSum.push(sum);
   //console.log("whats in array everytime",runningSum);
}
console.log(runningSum);

//console.log(sum);

// Strings and for loops
var sample_string = "tutoring";
// Substring -> Substring takes a small part of the string and creates a new string from that
// ex: "tutoring" -> tutor
// How do i go from tutoring to tutor?
//string.substring(first value of index you want to get, value index of end+1)
//console.log(sample_string.substring(0,5));

var programming_languages = ['Python','JavaScript','NodeJs'];

for(var i = 0; i <programming_languages.length; i++){
   // getting first 4 values of each
   console.log(programming_languages[i].substring(-1)); // getting entire string
   console.log(programming_languages[i].substring(programming_languages[i].length-3));// getting last character of each
}

var test_string = "tutoring";
var new_string = "";
var new_string_2 = "";

for(var i = test_string.length-1; i >= 0; i--){
   //console.log(test_string[i]);
   new_string += test_string[i];
   // Reserved .reverse() function to easily reverse a string
   new_string_2 = (test_string.split(""));//reverse();
   new_string_2.reverse();
   // join() -> puts all the values in the array together as a string
   new_string_2.join("");
}
console.log(new_string,new_string_2);

/*console.log(programming_languages[0].substring(0,2), programming_languages[1].substring(0,4),
programming_languages[2].substring(0,4));*/
 var toSlice = "thisIsABigWord";

 console.log(toSlice.slice(0,8));

 var animals = ['dog', 'cat', 'fish', 'bird', 'horse', 'rabbit'];

 console.log(animals.slice(0,1));

 var names1 = ['steve', 'danny', 'peter', 'suzie', 'karen', 'tina'];

 var names2 = 'alexander';

 console.log(names1.push(names2));

 console.log(names1);

 var countries = ['canada', 'usa', 'mexico', 'china', 'britain', 'spain'];

 console.log(countries.keys());

 var cities = ['toronto', 'montreal', 'vancouver', 'halifax', 'ottawa', 'calgary'];

 var cities2 = ["chicago"];

console.log(cities.push(cities2));

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 

var fruits2 = 'kiwi';

console.log(fruits.fill(fruits2, 0,1));

var cars = ['ford', 'dodge', 'mazda', 'honda', 'toyota'];

var text = "";

function cars1(item,index){
   text+= index +":" + item;
   console.log(index + "" + item);
}

console.log(cars.forEach(cars1));
// defining empty dictionary (stu and stu1)
var stu = new Object();
var stu1 = {};
var student = {
   "name" : 'Suzie',
   "age" : 20,
   "occupation" : 'student',
   "concentration" : 'math'
}

// iterating thru key value pairs
var value = "";
for (var key in student){
   value = student[key];
   console.log(value);
}

//console.log(value);
var dict = {};
var test = function (){

};

// make function as a value
dict['method'] = test;
dict[test] = 'd';
// setup function as key
dict['method'](); // execute function from value

var method = dict.method;
method();

var val = dict[test];
console.log(val);

// name, age, gender, overall_gpa and their favorite subject.
// Subjects include math, physics and english


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
var data = [];
for (var i=0;i<5;i++){
   data[i] = {
      "age": arr_students[i]["age"],
      "gender": arr_students[i]["gender"],
      "GPA": arr_students[i]["GPA"],
      "subject": arr_students[i]["subject"],
   }
}

for (var i = 0; i<5; i++){
   if( data[i].subject == 'english'){
      console.log("the data",data[i]);
   }
}

console.log(data);

var 