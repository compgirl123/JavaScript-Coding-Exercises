// SLICE METHOD

// The slice method, selects part of the array/string, and creates a new array/string.

var example = "gamergirl";
// We want to extract gamer from the example string "gamergirl"
example.slice(0,5); // index+1 for the second parameter here.
console.log(example.slice(0,5));
// We want to extrat girl from the example string "gamergirl"
example.slice(5,9);
console.log(example.slice(5,9));
var pizza = 'pizzahut';
pizza.slice(0,4);
console.log(pizza.slice(0,5));

var fastfood = ["Pizzahut","Taco Bell","McDonalds","Wendys"];
// using .slice() to select certain elements from the fastfood array

var fastfoodselected = fastfood.slice(2,4);
console.log(fastfoodselected);

// CONCAT
// concatination of strings and/or arrays
var string1 = "Pizza";
var string2 = "Hut";

// I want to combine string1 and stringw together , what do i do?
var combined_string = string1.concat(string2);
console.log(combined_string);

var arr1 = [6,1,7];
var arr2 = ["Claudia","Sean","Tutoring","JavaScript"];
var combined_arr = arr1.concat(arr2);
console.log(combined_arr);
// You can combine two different array types, here an array of integers was combined with an array of strings.

// Using the combined array, sort the elements alphabetically
// Use sort method only with arrays
var sorted_arr2 = arr2.sort();
console.log(sorted_arr2);
var sorted_combined_arr = combined_arr.sort();
console.log(sorted_combined_arr);

// SOME
// This method checks a condition (like an if statement) on an array (doesnt apply to strings)
// Here we are checking if any of the people in the array are legal

var clubbing_gang = [21,32,17,15,20];
var clubbing_gang_2 = [14,12,13,16,17,16];
function legal(age){
    return age >=18;
}

// Want to check who can get in from the clubbing gang

clubbing_gang_2.some(legal);
console.log(clubbing_gang_2.some(legal));

// FILTER 
// Filter method returns an array of all the values in a array with a certain condition

// I want to return all the people over 18 in the first clubbing gang
clubbing_gang.filter(legal);
console.log(clubbing_gang.filter(legal)); // returns an array with the values satisfying the condition 18+ (see legal(age))

// POP
// This function removes the last element in an array
// This is only for arrays, it doesnt apply to strings
clubbing_gang_2.pop(); // removing 16 year old from the array (the last element contained in this array is 16)
console.log(clubbing_gang_2);

// MAP
// This function makes a new array based off of another functino it calls
function sqrt(age){
    return Math.sqrt(age);
}

function add_5(age){
    return age+5;
}

clubbing_gang_2.map(add_5);
console.log(clubbing_gang_2.map(add_5));

// PUSH
// appending (or adding) an item to an array

console.log(clubbing_gang_2.push(16));
console.log(clubbing_gang_2);

// EVERY
// Kinda like some but it does a boolean check to see if ALL the values respect a certain condition
function illegal(age){
    return age < 18;
}
clubbing_gang_2.every(illegal);
console.log(clubbing_gang_2.every(illegal));
console.log((clubbing_gang_2.map(add_5)).every(illegal)); // combining two methods together

// FILL
// Adds a value to a specific place in an array and at specified positions and value at the certgain posotion gets replaced

clubbing_gang_2.fill(18,2,4); // first parameter: what you want to add, other ones are space in array
console.log(clubbing_gang_2);

// FOREACH
// It is kinda like a for loop, goes through each element incrementally in an array
var output = "";
function iteration_of_arr(item, index){
    output += "Item: " + item + "\n" + "Index: " + index + "\n";
    // \n means new line, this is to make the output look better
}
clubbing_gang_2.forEach(iteration_of_arr);
console.log(output);

// Finding the total sum of integers in an array
// This can easily be done using the foreach() method
var age_sum = 0;
var age_multi = 1;
var age_substraction = 0;

function sum_of_ages(item){
    age_sum +=item;
    age_multi *= item;
    age_substraction -= item;
}
clubbing_gang_2.forEach(sum_of_ages);
console.log(age_sum,age_multi,age_substraction);

// FINDINDEX
// Return the index of the first element in the array of the age that is legal

clubbing_gang_2.findIndex(legal);
console.log(clubbing_gang_2);
console.log(clubbing_gang_2.findIndex(legal));

// FIND
// Very similar to findindex but instead of returning the index, you return the value
clubbing_gang_2.find(legal);
console.log(clubbing_gang_2.find(legal));

// FROM
// creation of an array from a string. It creates an array of characters with each index having only one value
var tutoring = "12345";
var sample_number_array = Array.from(tutoring);
console.log(sample_number_array);

// INCLUDES
// Checking if a certain array has a certain value.

console.log(sample_number_array.includes('3'));
console.log(sample_number_array.includes('6'));

// INDEXOF
// Returns the index of a specified value you put in ()

console.log(sample_number_array.indexOf('4')); // position of '4' is 3 in the sample_number_array
console.log(sample_number_array.indexOf('9')); // returns -1, means it does not exist

console.log(clubbing_gang.indexOf(18)); // -1 since 18 is not a value present in the array
console.log(clubbing_gang.indexOf(20)); // 4 since 20 exists at position 4 in the array.

// ISARRAY
// Chedck if an object is an array
console.log(Array.isArray(clubbing_gang));
console.log(Array.isArray(clubbing_gang_2));
console.log(Array.isArray(sample_number_array));
console.log(Array.isArray(tutoring));
console.log(Array.isArray(age_sum));
console.log(Array.isArray(age_multi));

// JOIN
// Take the elements in an array and convert them into a string

// referring to this: var fastfood = ["Pizzahut","Taco Bell","McDonalds","Wendys"];
fastfood.join(""); // this returns a string of all the fast food
console.log(fastfood.join(" "));
console.log(fastfood.join(" : "));
console.log(fastfood.join("/"));
console.log(fastfood.join(" / "));
console.log(fastfood.join(" // "));
console.log(fastfood.join(" ,/a "));

console.log(Array.isArray(fastfood.join(" ,/a ")));

// KEYS
// Index of the array

var keys_arr = fastfood.keys();
var output_text = "";

for(var x of keys_arr){
    output_text += x;
}
console.log(output_text);

// LASTINDEXOF
// This method returns the last index or position of a specified value in ()

fastfood.lastIndexOf("McDonalds");
console.log(fastfood.lastIndexOf("McDonalds"));
console.log(fastfood.lastIndexOf("Harveys")); // returns negative 1 as it is not in the array
console.log(fastfood.lastIndexOf("Pizzahut"));

fastfood.fill("Pizzahut",0,3);
console.log(fastfood);
console.log(fastfood.lastIndexOf("Pizzahut"));

// Another form of lastindexof
// Search in an array for the last occurence of a value starting at a certain position

//fastfood.lastIndexOf("Wendys",2);
console.log(fastfood);
console.log(fastfood.lastIndexOf('Wendys',2)); // looking backwards, from 2 to 0


