function sum(n1,n2){ 
    /*Add two numbers that are inputted*/ 
    /*Here you can save the result of this function into a variable*/ 
    
    var sum = n1+ n2; 
        return sum;
    }
    // Calling the above: 
    var n1 = 10;
    var n2 = 6;
    sum(n1,n2); // this is a function call of the above function
    
    function sum(n1,n2){ 
        /*Add two numbers that are inputted*/
        /*Here you cannot save the result of this function into a variable*/ 
        var sum = n1+ n2; 
        n1 = 11; // local to function
        n2 = 14; // local to function
        console.log(sum);
    }
    
    function sum(){
        /*add two assigned numbers*/
        var n1 = 2;
        var n2 = 5;
        var sum = n1 + n2;
    }
    