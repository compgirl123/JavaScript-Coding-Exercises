
let carriersCombined = [];

let carrier1 = {
    "Name": 'Transport Unlimited',
    "Year Established": 1959,
    "Headquarters": 'Montreal',
    "# of Employees": 500,
    "#OfTrucks": 200,
    "International Shipping": true
}

let carrier2 = {
    "Name": 'Total Transport',
    "Year Established": 1969,
    "Headquarters": 'Toronto',
    "# of Employees": 600,
    "#OfTrucks": 240,
    "International Shipping": true
}

let carrier3 = {
    "Name": 'Canadian National Shipping Service',
    "Year Established": 1909,
    "Headquarters": 'Ottawa',
    "# of Employees": 440,
    "#OfTrucks": 220,
    "International Shipping": false
}

let carrier4 = {
    "Name": 'Transport Worldwide Inc.',
    "Year Established": 1987,
    "Headquarters": 'Vancouver',
    "# of Employees": 1000,
    "#OfTrucks": 400,
    "International Shipping": true
}

let carrier5 = {
    "Name": 'Atlantic Transport Services',
    "Year Established": 1964,
    "Headquarters": 'Halifax',
    "# of Employees": 500,
    "#OfTrucks": 230,
    "International Shipping": true
}

carriersCombined = [carrier1, carrier2, carrier3, carrier4, carrier5];

for( x = 0; x < carriersCombined.length; x++){
    var trucksCombined = [];

    trucksCombined.push(carriersCombined[x]["#OfTrucks"]);
    console.log(trucksCombined); /* why does the console.log have to be inside the loop to print all the keys */
}






// for(var x = 0; x < carriersCombined.length; x++){
//     if(carriersCombined[x].)
// }

